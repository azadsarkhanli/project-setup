import { Platform, UIManager } from 'react-native';

// From https://reactnative.dev/docs/layoutanimation:
// Note that in order to get this to work on Android you need to set the following flags via UIManager
export const enableLayoutAnimation = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
};
