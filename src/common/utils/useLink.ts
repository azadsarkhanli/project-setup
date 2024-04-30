import { GestureResponderEvent, Linking } from 'react-native';
import type { AccessibilityRole } from 'react-native';

export type IUseLinkProp = {
  href?: string;
  onPress?: ((event?: GestureResponderEvent) => unknown) | null | undefined;
};

const linkToHREF = (URL: string) => {
  Linking.openURL(URL).catch(err => console.error('An error occurred', err));
};

const addOnPressFunctionality = (
  href: IUseLinkProp['href'],
  callback: IUseLinkProp['onPress'],
) => {
  href ? linkToHREF(href) : '';
  callback
    ? callback()
    : () => {
        // do nothing
      };
};

export function useLink(props: IUseLinkProp) {
  const { href, onPress } = props;

  return {
    linkProps: {
      onPress: () => {
        addOnPressFunctionality(href, onPress);
      },
      accessibilityRole: 'link' as AccessibilityRole,
      accessible: true,
    },
  };
}
