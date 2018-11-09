import configureUportConnect from 'react-native-uport-connect';
import {
  UPORT_APP_NAME,
  UPORT_APP_ADDRESS,
  UPORT_PRIVATE_KEY
} from 'react-native-dotenv';
import DeviceInfo from 'react-native-device-info';
import Web3 from 'web3';

const { uport, MNID } = configureUportConnect({
  appName: UPORT_APP_NAME,
  appAddress: UPORT_APP_ADDRESS,
  privateKey: UPORT_PRIVATE_KEY
});

const isEmulator = DeviceInfo.isEmulator();

// uPort wont run on an emulator, replacing interesting
// functionality with ganache
const web3Provider = !isEmulator
  ? uport.getProvider()
  : new Web3.providers.WebsocketProvider('http://127.0.0.1:8545');

const web3 = new Web3(web3Provider);

const networkId = !isEmulator
  ? web3.utils.hexToNumberString(uport.network.id)
  : '42';

const requestCredentials = !isEmulator
  ? async () => {
      const payload = await uport.requestCredentials();

      return {
        address: MNID.decode(payload.networkAddress).address
      };
    }
  : async () => {
      const accounts = await web3.eth.getAccounts();

      return {
        address: accounts[0]
      };
    };

export { web3, requestCredentials, networkId };
