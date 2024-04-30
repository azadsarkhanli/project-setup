import { secondsToDuration } from '../utils';

const examples = [
  {
    totalSeconds: -1000,
    result: { hours: '00', minutes: '16', seconds: '40' },
  },
  { totalSeconds: 0, result: { hours: '00', minutes: '00', seconds: '00' } },
  { totalSeconds: 1, result: { hours: '00', minutes: '00', seconds: '01' } },
  { totalSeconds: 60, result: { hours: '00', minutes: '01', seconds: '00' } },
  { totalSeconds: 3600, result: { hours: '01', minutes: '00', seconds: '00' } },
  {
    totalSeconds: 10000,
    result: { hours: '02', minutes: '46', seconds: '40' },
  },
  {
    totalSeconds: 100000,
    result: { hours: '27', minutes: '46', seconds: '40' },
  },
] as const;

describe('secondsToDuration', () => {
  it.each(examples)('totalSeconds example %#', example => {
    expect(secondsToDuration(example.totalSeconds)).toStrictEqual(
      example.result,
    );
  });
});
