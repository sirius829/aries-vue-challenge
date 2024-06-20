import { formatNumber } from '../../src/utils/formatNumber';

describe('formatNumber', () => {
  it('formats a number to three decimal places', () => {
    expect(formatNumber(1234.56789)).toBe('1,234.568');
  });

  it('formats a number with fewer than three decimal places', () => {
    expect(formatNumber(1234.5)).toBe('1,234.500');
  });

  it('formats a whole number', () => {
    expect(formatNumber(1234)).toBe('1,234.000');
  });

  it('formats a negative number', () => {
    expect(formatNumber(-1234.56789)).toBe('-1,234.568');
  });

  it('formats zero correctly', () => {
    expect(formatNumber(0)).toBe('0.000');
  });
});
