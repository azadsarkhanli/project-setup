import { formatAddress } from '../userData';

const examples = [
  [{}, ''],
  [
    {
      street: 'Downing Street',
      streetNumber: '10',
    },
    'Downing Street 10',
  ],
  [
    {
      city: 'Oslo',
    },
    'Oslo',
  ],
  [
    {
      street: 'Downing Street',
      city: 'Oslo',
    },
    'Downing Street, Oslo',
  ],
  [
    {
      street: 'Downing Street',
      zipCode: '0123',
      city: 'Oslo',
    },
    'Downing Street, 0123 Oslo',
  ],
  [
    {
      street: 'Downing Street',
      streetNumber: '10',
      zipCode: '0123',
      city: 'Oslo',
    },
    'Downing Street 10, 0123 Oslo',
  ],
] as const;

describe('formatAddress', () => {
  it.each(examples)('formats example %#', (progress, result) => {
    expect(formatAddress(progress)).toBe(result);
  });
});
