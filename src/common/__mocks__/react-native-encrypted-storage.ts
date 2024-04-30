const storageMock: { [key: string]: string | null } = {};

export default {
  setItem: (key: string, value: string): Promise<string | null> => {
    return new Promise(resolve => {
      storageMock[key] = value;
      resolve(value);
    });
  },
  getItem: (key: string): Promise<string | null> => {
    return new Promise(resolve => {
      resolve(storageMock[key] || null);
    });
  },
  clear: () => {
    return new Promise(resolve => {
      Object.keys(storageMock).forEach(key => {
        delete storageMock[key];
      });
      resolve(true);
    });
  },
  removeItem: (key: string) => {
    return new Promise(resolve => {
      delete storageMock[key];
      resolve(true);
    });
  },
};
