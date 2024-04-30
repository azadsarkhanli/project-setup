export default {
  DocumentDir: jest.fn(),
  fetch: jest.fn(),
  base64: jest.fn(),
  android: jest.fn(),
  ios: jest.fn(),
  config: jest.fn(() => ({
    fetch: jest.fn(() => ({
      progress: jest.fn().mockResolvedValue(true),
    })),
  })),
  session: jest.fn(),
  fs: {
    cp: jest.fn().mockResolvedValue(true),
    dirs: {
      CacheDir: '/mockCacheDir',
    },
    unlink: jest.fn(),
  },
  wrap: jest.fn(),
  net: jest.fn(),
  polyfill: jest.fn(),
  JSONStream: jest.fn(),
};
