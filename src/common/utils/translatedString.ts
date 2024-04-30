import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslatedStringFragment } from '../../features/catalog/graphql';

export const useTranslatedString = () => {
  const {
    i18n: { language },
  } = useTranslation();
  return useMemo(
    () => (value: TranslatedStringFragment) =>
      language === 'en' ? value.en : value.no,
    [language],
  );
};
