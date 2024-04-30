import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking } from 'react-native';

import { useAppContext } from '../../app/context/AppProvider';
import {
  ChevronForwardIcon,
  LogOutOutlineIcon,
  MailOutlineIcon,
  OpenOutlineIcon,
} from '../../common/components/icons';
import { useAuthContext } from '../../common/context/AuthContext';
import { track } from '../../common/events';

export const useSettingsMenu = () => {
  const { logout } = useAuthContext();
  const { t } = useTranslation('catalog');
  const {
    remoteConfig: {
      feedback: { url: feedbackUrl },
    },
  } = useAppContext();

  const openFeedbackPage = useCallback(() => {
    feedbackUrl && Linking.openURL(feedbackUrl);
    track(['feedback_clicked']);
  }, [feedbackUrl]);

  const onLogout = useCallback(() => {
    logout();
    track(['logout_clicked']);
  }, [logout]);

  return useMemo(
    () => [
      ...(feedbackUrl
        ? [
            {
              label: t('profileScreen.menuItems.leaveFeedback'),
              onPress: openFeedbackPage,
              Icon: MailOutlineIcon,
              RightIcon: OpenOutlineIcon,
            },
          ]
        : []),
      {
        label: t('profileScreen.menuItems.logout'),
        onPress: onLogout,
        Icon: LogOutOutlineIcon,
        RightIcon: ChevronForwardIcon,
      },
    ],
    [onLogout, feedbackUrl, openFeedbackPage, t],
  );
};
