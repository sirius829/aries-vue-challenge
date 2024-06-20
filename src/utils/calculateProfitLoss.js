import { formatNumber } from "./formatNumber";

// Constants
const PRICE_INCREMENT = 0.5;
const BREAK_EVEN_THRESHOLD = 0.001;

/**
 * Calculate the profit/loss for the given options data and underlying price.
 * @param {Array} optionsData - Array of options data objects.
 * @param {number} underlyingPrice - The underlying price at expiry.
 * @returns {Object} - The calculated results including graph data, max profit, max loss, and break-even points.
 */
export function calculateProfitLoss(optionsData, underlyingPrice) {
  const graphData = [];
  let maxProfit = -Infinity;
  let maxLoss = Infinity;
  const breakEvenPoints = [];

  // Calculate profit/loss for a range of underlying prices
  for (let price = underlyingPrice - 50; price <= underlyingPrice + 50; price += PRICE_INCREMENT) {
    let totalProfitLoss = 0;

    optionsData.forEach(option => {
      const { strike_price, type, bid, ask, long_short } = option;
      const cost = (bid + ask) / 2;
      const position = long_short === 'long' ? 1 : -1;

      if (type === 'Call') {
        totalProfitLoss += position * (Math.max(0, price - strike_price) - cost);
      } else if (type === 'Put') {
        totalProfitLoss += position * (Math.max(0, strike_price - price) - cost);
      }
    });

    graphData.push({ price, totalProfitLoss });

    if (totalProfitLoss > maxProfit) maxProfit = totalProfitLoss;
    if (totalProfitLoss < maxLoss) maxLoss = totalProfitLoss;
    
    if (Math.abs(totalProfitLoss) < BREAK_EVEN_THRESHOLD) {
      breakEvenPoints.push(price.toFixed(2));
    }
  }

  return { 
    graphData, 
    maxProfit: formatNumber(maxProfit), 
    maxLoss: formatNumber(maxLoss),
    breakEvenPoints 
  };
}
