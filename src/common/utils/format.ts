import { Maybe } from '../types';

export const formatProgress = (
  progress: Maybe<number>,
  showPercentage = true,
) =>
  `${Math.max(Math.round(Math.min((progress || 0) * 100, 100)), 0)}${
    showPercentage ? '%' : ''
  }`;
