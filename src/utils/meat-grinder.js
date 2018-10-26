import Aes from 'react-native-aes-crypto';

/**
 * Encrypts a string with an AES cypher
 *
 * @param {string} privateKey - A base64 secret
 * @param {string} plainTextFile - Text to be enciphered
 * @returns {Promise<{cipherText: ArrayBuffer, iv: string}>} A promise for a cipher text and it's IV
 */
export async function encryptWithAes(privateKey, plainTextFile) {
  const iv = 'sixteen bytes iv'; //To DO: randomly generate
  try {
    const cipherText = await Aes.encrypt(plainTextFile, privateKey, iv);
    return { cipherText, iv };
  } catch (error) {
    throw error;
  }
}
