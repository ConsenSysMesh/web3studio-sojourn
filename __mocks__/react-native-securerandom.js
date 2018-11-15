/**
 * Mocked generateSecureRandom
 *
 * @param {number} numBytes - number of bytes to generate
 * @returns {Array<number>} - array of "random" bytes
 */
export function generateSecureRandom(numBytes) {
  return new Array(numBytes).fill(1);
}
