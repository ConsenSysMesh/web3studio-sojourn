import { encryptSplitAndSpreadSecret } from 'react-native-sssa';

export default {
  save: async contentString => {
    const { iv, locations } = await encryptSplitAndSpreadSecret(
      contentString,
      12,
      7
    );

    return {
      iv,
      hashes: locations.map(loc => loc.Key)
    };
  }
};
