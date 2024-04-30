import { GraphQlNode } from '../../../common/types';

import { PublicationFragment } from './index';

export type AudiobookPublicationFragment = Extract<
  PublicationFragment,
  GraphQlNode<'AudiobookPublication'>
>;
