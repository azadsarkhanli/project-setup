import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useStore } from 'react-redux';

import { RootStackParamList } from '../../common/navigation';
import { usePlayerContext } from '../../reader/audio/context/PlayerContext';
import { bookshelfAudiobook } from '../catalog/reducer/bookshelf';

export const usePlayPublication = () => {
  const store = useStore();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { onPlayPublication } = usePlayerContext();

  return useCallback(
    async (id: string) => {
      const publication = bookshelfAudiobook(id)(store.getState());
      if (!publication) {
        return;
      }
      navigation.navigate('Player', { id: id });
      return onPlayPublication(publication);
    },
    [navigation, onPlayPublication, store],
  );
};
