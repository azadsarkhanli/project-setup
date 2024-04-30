declare module 'react-native-pkce-challenge' {
  type PkceChallenge = {
    codeChallenge: string;
    codeVerifier: string;
  };

  const asyncPkceChallenge: () => Promise<PkceChallenge>;
  const pkceChallenge: () => PkceChallenge;

  export { asyncPkceChallenge, pkceChallenge };
}
