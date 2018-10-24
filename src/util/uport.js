import configureUportConnect from 'react-native-uport-connect';
import {
  UPORT_APP_NAME,
  UPORT_APP_ADDRESS,
  UPORT_PRIVATE_KEY
} from 'react-native-dotenv';

export const { uport, MNID } = configureUportConnect({
  appName: UPORT_APP_NAME,
  appAddress: UPORT_APP_ADDRESS,
  privateKey: UPORT_PRIVATE_KEY
});
