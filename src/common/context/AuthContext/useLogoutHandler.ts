import { useCallback } from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { useStore } from 'react-redux';

import { apolloPersistor } from '../../../app/context/ApolloProvider/client';
import { persistor } from '../../../app/context/ReduxProvider/store';
import { allEbookFiles } from '../../../features/catalog/reducer/files';
import { captureException } from '../../utils/logger';

export const useLogoutHandler = () => {
  const store = useStore();

  return useCallback(async () => {
    const files = allEbookFiles(store.getState());
    await Promise.all(Object.values(files).map(f => removeFile(f)));
    await apolloPersistor.purge();
    await persistor.purge();
  }, [store]);
};

const removeFile = async (path: string | undefined) => {
  if (!path) {
    return;
  }
  try {
    await ReactNativeBlobUtil.fs.unlink(path);
  } catch (e) {
    captureException(e as Error);
  }
};
