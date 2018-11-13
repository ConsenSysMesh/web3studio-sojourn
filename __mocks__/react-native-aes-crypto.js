import crypto from 'crypto';
import { NativeModules } from 'react-native';
import { promisify } from 'util';
import { btoa, atob } from 'Base64';
NativeModules.Aes = {
  pbkdf2: async function(text, salt, cost, length) {
    return promisify(crypto.pbkdf2(text, salt, cost, length, null));
  },
  encrypt: async function(text, key, iv) {
    return btoa(text);
  },
  decrypt: async function(base64, key, iv) {
    return atob(base64);
  }
};
