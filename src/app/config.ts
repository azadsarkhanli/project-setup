import Config from 'react-native-config';

export const authConfig = {
  tokenEndpoint: Config.AUTH_TOKEN_URL,
  revokeEndpoint: Config.AUTH_REVOKE_URL,
};

export const contentLinks = {
  termsAndConditions: 'https://www.ark.no/privat-vern',
  arkVennConditions: 'https://www.ark.no/privat-vern',
} as const;

export const sanitySlugs = {
  homeScreen: 'home-screen',
};
