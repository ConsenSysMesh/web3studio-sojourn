import {
  encryptSplitAndSpreadSecret,
  collectCombineAndDecryptSecret
} from 'react-native-sssa';
export default {
  save: async contentString => {
    // Warning to show to dev that it's executed, still need to fill in code
    /* eslint-disable-next-line no-console */
    let resultObj = await encryptSplitAndSpreadSecret(contentString, 7, 7);
    return {
      iv: resultObj.iv,
      hashes: resultObj.locations.map(loc => loc.Key)
    };
  },
  restore: async (ipfsHashes, secret, contentHash) => {
    // Warning to show to dev that it's executed, still need to fill in code
    /* eslint-disable-next-line no-console */

    console.warn(
      `Unimplemented function vault.restore`,
      ipfsHashes,
      secret,
      contentHash
    );

    return '';
  }
};
