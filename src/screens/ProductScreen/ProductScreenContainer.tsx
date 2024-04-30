import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { Linking } from 'react-native';
import VersionInfo from 'react-native-version-info';
import { useSelector } from 'react-redux';

import { LoadingScreen } from '../../common/components/LoadingScreen';
import { track } from '../../common/events';
import { PublicationFormat } from '../../common/graphql';
import { CombinedNavParamList } from '../../common/navigation';
import { useProductBundle } from '../../features/catalog/graphql/queries';
import { useConnectedBookFile } from '../../features/catalog/hooks/useConnectedBookFile';
import { bookshelfPublication } from '../../features/catalog/reducer/bookshelf';
import { usePlayPublication } from '../../features/player/usePlayPublication';
import { GraphQlErrorScreen } from '../GraphQlErrorScreen';

import { ProductScreen } from './ProductScreen';

// TODO read from remote config
const urlTemplate =
  'https://www.ark.no/search/?format=E-Bok%7ENedlastbar%20lydbok&text={{title}}#utm_source=ark_app&utm_medium=product_page&utm_campaign={{app_verison}}&utm_content={{title}}';

export const ProductScreenContainer: FC<
  NativeStackScreenProps<CombinedNavParamList, 'Product'>
> = ({ navigation: { goBack, navigate }, route }) => {
  const { id } = route.params;
  const isFocused = useIsFocused();
  const publication = useSelector(bookshelfPublication(id));
  const playPublication = usePlayPublication();
  const {
    cancel,
    checkFile,
    download,
    fileStatus,
    downloadProgress,
    removeFile,
    // TODO: handle missing publication better, either way the file is not used if publication is null
  } = useConnectedBookFile(
    id,
    publication?.format || PublicationFormat.Audiobook,
    'productPage',
  );

  const downloadProps = useMemo(() => {
    if (!publication) {
      return null;
    }
    return {
      cancel,
      download: () => download(publication.downloadUri),
      downloadProgress,
      fileStatus,
      removeFile,
    };
  }, [cancel, download, downloadProgress, fileStatus, publication, removeFile]);

  useEffect(() => {
    checkFile();
  }, [isFocused, checkFile]);

  const {
    data: productBundle,
    loading,
    error,
    refetch,
  } = useProductBundle({
    variables: {
      id,
    },
  });

  const dataForTracking = publication ?? productBundle;
  useEffect(() => {
    if (dataForTracking) {
      track([
        'product_page_content_loaded',
        {
          book_id: dataForTracking.id,
          book_title: dataForTracking.title,
          book_author: dataForTracking.authorsFormatted,
          book_owned: !!publication,
          book_owned_format: publication?.format,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataForTracking]);

  const onOpen = useCallback(() => {
    if (!publication) {
      return;
    }
    switch (publication.__typename) {
      case 'EbookPublication':
        navigate('Reader', { bookId: publication.id });
        break;
      case 'AudiobookPublication':
        playPublication(publication.id);
        break;
    }
  }, [navigate, playPublication, publication]);

  const onPurchase = useCallback(async () => {
    if (!productBundle) {
      return;
    }
    const url = urlTemplate
      .split('{{title}}')
      .join(encodeURIComponent(productBundle.title))
      .replace('{{app_verison}}', VersionInfo.appVersion);
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);

      track([
        'external_link',
        {
          book_id: productBundle.id,
          book_title: productBundle.title,
          book_author: productBundle.authorsFormatted,
        },
      ]);
    }
  }, [productBundle]);

  if (!productBundle && !publication) {
    if (!loading && error) {
      return <GraphQlErrorScreen error={error} onTryAgain={refetch} />;
    }
    return <LoadingScreen />;
  }

  return (
    <ProductScreen
      downloadProps={downloadProps}
      productBundle={productBundle}
      publication={publication}
      onGoBack={goBack}
      onOpen={onOpen}
      onPurchase={onPurchase}
    />
  );
};
