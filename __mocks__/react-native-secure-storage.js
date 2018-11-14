import {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE
} from 'react-native-secure-storage';

export { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE };

const data = {};

export default {
  getItem: async function(key) {
    return data[key];
  },
  setItem: async function(key, value) {
    data[key] = value;
  }
};
