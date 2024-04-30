declare module 'react-native-config' {
  interface Env {
    API_URL: string;
    APP_UNIVERSALLINKS_PREFIX: string;
    APP_DEEPLINKS_PREFIX: string;
    AUTH_REVOKE_URL: string;
    AUTH_TOKEN_URL: string;
  }

  const Config: Env;

  export default Config;
}
