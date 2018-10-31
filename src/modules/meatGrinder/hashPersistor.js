import { web3, networkId } from '../signIn/uport';
import DeviceInfo from 'react-native-device-info';

let HashPersistorContract = require('../../contracts/HashPersistor.json');

if (DeviceInfo.isEmulator()) {
  HashPersistorContract = require('../../../build/contracts/HashPersistor.json');
}

const currentContractNetwork = HashPersistorContract.networks[networkId];

/* istanbul ignore next */
if (!currentContractNetwork && __DEV__) {
  // Logging error for mis-configured dev environment
  // eslint-disable-next-line no-console
  console.error(
    'Unable to find deployed HashPersistor contract on network ',
    networkId
  );
}

const contract = new web3.eth.Contract(
  HashPersistorContract.abi,
  currentContractNetwork.address
);

export default contract;
