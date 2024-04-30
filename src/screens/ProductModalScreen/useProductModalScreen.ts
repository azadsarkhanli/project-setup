import { NavigationProp, useNavigation } from '@react-navigation/core';

import { RootStackParamList } from '../../common/navigation';

const publication = {
  id: '0398bbc0-a2a6-4a84-95bb-3d602f460427',
  title: 'The New Book',
  author: 'Agatha Christie',
};

export const useProductModalScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return {
    publication,
    onOpen: () => {
      navigation.goBack();
      navigation.navigate('Reader', { bookId: publication.id });
    },
  };
};
