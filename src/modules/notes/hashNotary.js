import { web3, networkId } from '../signIn/uport';
import DeviceInfo from 'react-native-device-info';

let HashNotaryContract = require('../../contracts/HashNotary.json');

if (DeviceInfo.isEmulator()) {
  HashNotaryContract = require('../../../build/contracts/HashNotary.json');
}

const currentContractNetwork = HashNotaryContract.networks[networkId];

/* istanbul ignore next */
if (!currentContractNetwork && __DEV__) {
  // Logging error for mis-configured dev environment
  // eslint-disable-next-line no-console
  console.error(
    'Unable to find deployed HashNotary contract on network ',
    networkId
  );
}

export default new web3.eth.Contract(
  HashNotaryContract.abi,
  currentContractNetwork.address
);
