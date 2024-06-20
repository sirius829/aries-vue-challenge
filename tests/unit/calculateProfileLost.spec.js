import { calculateProfitLoss } from '../../src/utils/calculateProfitLoss';

describe('calculateProfitLoss', () => {
  const optionsData = [
    { strike_price: 100, type: 'Call', bid: 10, ask: 12, long_short: 'long' },
    { strike_price: 105, type: 'Put', bid: 8, ask: 9, long_short: 'short' }
  ];

  it('calculates profit/loss correctly', () => {
    const underlyingPrice = 100;
    const result = calculateProfitLoss(optionsData, underlyingPrice);

    expect(result).toHaveProperty('graphData');
    expect(result).toHaveProperty('maxProfit');
    expect(result).toHaveProperty('maxLoss');
    expect(result).toHaveProperty('breakEvenPoints');

    expect(result.maxProfit).toBe('47.500');
    expect(result.maxLoss).toBe('-57.500');
  });

  it('handles empty options data', () => {
    const underlyingPrice = 100;
    const result = calculateProfitLoss([], underlyingPrice);

    expect(result.graphData.length).toBeGreaterThan(0); // Graph data should still be calculated
    expect(result.maxProfit).toBe('0.000');
    expect(result.maxLoss).toBe('0.000');
  });

  it('handles extreme underlying prices', () => {
    const underlyingPrice = 10000;
    const result = calculateProfitLoss(optionsData, underlyingPrice);

    expect(result.maxProfit).not.toBe('-Infinity');
    expect(result.maxLoss).not.toBe('Infinity');
  });
});
