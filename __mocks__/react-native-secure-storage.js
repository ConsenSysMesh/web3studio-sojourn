import { AsyncStorage } from 'react-native';

import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE
} from 'react-native-secure-storage';
export { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE };
const data = {};
export default {
  getItem: async function(key, config) {
    return data[key];
  },
  setItem: async function(key, value, config) {
    data[key] = value;
  }
};
