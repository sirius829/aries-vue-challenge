/**
 * Format a number to three decimal places with locale-specific formatting.
 * @param {number} value - The number to format.
 * @returns {string} - The formatted number.
 */
export function formatNumber(value) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  }).format(value);
}
