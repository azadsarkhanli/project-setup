import { resources } from './resources';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'catalog';
    resources: typeof resources['en'];
  }
}
