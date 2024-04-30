import { compare } from '../appVersion';

describe('appVersion util', () => {
  it('should compare versions properly', () => {
    expect(compare('0.0.1', '0.0.2')).toEqual('lower');
    expect(compare('0.0.1', '0.0.1')).toEqual('equal');
    expect(compare('0.0.2', '0.0.1')).toEqual('greater');

    expect(compare('1', '1.0.0')).toEqual('equal');
    expect(compare('1.0', '1.0.0')).toEqual('equal');
    expect(compare('1.0.0', '1')).toEqual('equal');
    expect(compare('1.0.0', '1.0')).toEqual('equal');

    expect(compare('1.0.1', '2.0')).toEqual('lower');
    expect(compare('1.0.1', '2')).toEqual('lower');

    expect(compare('2.0', '1.5.1')).toEqual('greater');
    expect(compare('2', '1.9.9')).toEqual('greater');

    expect(compare('foo', 'bar')).toEqual('unknown');
    expect(compare('a.b.c', '1.2.3')).toEqual('unknown');
  });
});
