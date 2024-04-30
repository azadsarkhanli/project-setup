import { QueryHookOptions } from '@apollo/client';

import { GraphQlNode } from '../../../common/types';
import { useExtractQuery } from '../../../common/utils/extractQuery';
import { useLogGraphQlError } from '../../../common/utils/useLogGraphQlError';

import {
  CmsScreenQuery,
  CmsScreenQueryVariables,
  ProductBundleQuery,
  ProductBundleQueryVariables,
  useCmsScreenQuery,
  useProductBundleQuery,
} from './index';

export const useCmsScreen = (
  options: QueryHookOptions<CmsScreenQuery, CmsScreenQueryVariables>,
) => {
  const result = useExtractQuery<
    CmsScreenQuery,
    CmsScreenQueryVariables,
    Extract<CmsScreenQuery['cmsScreen'], GraphQlNode<'CmsScreen'>>
  >(useCmsScreenQuery(options), 'CmsScreen', payload => payload.cmsScreen);

  useLogGraphQlError('CmsScreen', result.error);

  return result;
};

export const useProductBundle = (
  options: QueryHookOptions<ProductBundleQuery, ProductBundleQueryVariables>,
) => {
  const result = useExtractQuery<
    ProductBundleQuery,
    ProductBundleQueryVariables,
    Extract<ProductBundleQuery['productBundle'], GraphQlNode<'ProductBundle'>>
  >(
    useProductBundleQuery(options),
    'ProductBundle',
    payload => payload.productBundle,
  );

  useLogGraphQlError('ProductBundle', result.error);

  return result;
};
