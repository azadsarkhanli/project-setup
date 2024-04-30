import { FlatList } from 'native-base';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoadingScreen } from '../../../../common/components/LoadingScreen';
import { TableCellLink } from '../../../../common/components/TableCell/TableCellLink';
import { useReaderContext } from '../../context/ReaderContext';

import { TableOfContentsLink, useTableOfContents } from './useTableOfContents';
import { SCROLLVIEW_CONTAINER_STYLE } from './utils';

type TableOfContentsProps = {
  onClose: () => void;
};

export const TableOfContents: FC<TableOfContentsProps> = ({ onClose }) => {
  const { currentLocator, goToLocator } = useReaderContext();
  const toc = useTableOfContents();
  const { t } = useTranslation('reader');
  const [loading, setLoading] = useState(false);
  const currentHref = currentLocator?.href;

  const handlePress = (href: string) => {
    goToLocator({
      href,
      type: 'application/xhtml+xml',
    });

    setLoading(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <FlatList
      contentContainerStyle={SCROLLVIEW_CONTAINER_STYLE}
      data={toc || []}
      keyExtractor={item => `${item.href}-${item.title}`}
      renderItem={({
        item: { href, title },
        index,
      }: {
        item: TableOfContentsLink;
        index: number;
      }) => (
        <TableCellLink
          variant="outline"
          size="md"
          onPress={() => handlePress(href)}
          rightContent={null}
          title={title || ''}
          _title={{
            fontWeight: 500,
          }}
          subtitle={
            currentHref && href === currentHref
              ? t('readerMenu.outline.tableOfContents.readingNow')
              : undefined
          }
          borderTopWidth={index === 0 ? 1 : 0}
          borderTopRadius={index === 0 ? 8 : 0}
          borderBottomRadius={index === (toc || [])?.length - 1 ? 8 : 0}
        />
      )}
    />
  );
};
