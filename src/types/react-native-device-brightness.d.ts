declare module '@adrianso/react-native-device-brightness' {
  const module: {
    setBrightnessLevel: (value: number) => void;
    getBrightnessLevel: () => Promise<number>;
    getSystemBrightnessLevel: () => Promise<number>;
  };
  export default module;
}
