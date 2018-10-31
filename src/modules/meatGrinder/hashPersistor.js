import { web3, uport } from '../../util/uport';
import HashPersistorContract from '../../../build/contracts/HashPersistor.json';

const networkId = web3.utils.hexToNumberString(uport.network.id);
const currentContractNetwork = HashPersistorContract.networks[networkId];

/* istanbul ignore next */
if (!currentContractNetwork && __DEV__) {
  // Logging error for mis-configured dev environment
  // eslint-disable-next-line no-console
  console.error(
    'Unable to find deployed HashPersistor contract on network ',
    uport.network.id
  );
}

const contract = new web3.eth.Contract(
  HashPersistorContract.abi,
  currentContractNetwork.address
);

export default contract;
