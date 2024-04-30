import { formatProgress } from '../format';

const examples = [
  [{ progress: null, showPercentage: true }, '0%'],
  [{ progress: -1, showPercentage: true }, '0%'],
  [{ progress: 0, showPercentage: true }, '0%'],
  [{ progress: 0.01, showPercentage: true }, '1%'],
  [{ progress: 0.25, showPercentage: true }, '25%'],
  [{ progress: 0.99, showPercentage: true }, '99%'],
  [{ progress: 1, showPercentage: true }, '100%'],
  [{ progress: 2, showPercentage: true }, '100%'],
  [{ progress: null, showPercentage: false }, '0'],
  [{ progress: -1, showPercentage: false }, '0'],
  [{ progress: 0, showPercentage: false }, '0'],
  [{ progress: 0.01, showPercentage: false }, '1'],
  [{ progress: 0.25, showPercentage: false }, '25'],
  [{ progress: 0.99, showPercentage: false }, '99'],
  [{ progress: 1, showPercentage: false }, '100'],
  [{ progress: 2, showPercentage: false }, '100'],
] as const;

describe('formatProgress', () => {
  it.each(examples)('formats example %#', (example, result) => {
    expect(formatProgress(example.progress, example.showPercentage)).toBe(
      result,
    );
  });
});
