import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE
} from 'react-native-secure-storage';

const config = {
  accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
  accessible: ACCESSIBLE.WHEN_UNLOCKED,
  authenticationPrompt: 'Log in to Sojourn',
  service: 'sojourn',
  authenticateType: AUTHENTICATION_TYPE.BIOMETRICS
};

export default Object.keys(SecureStorage).reduce((exports, fnName) => {
  exports[fnName] = (...args) => SecureStorage[fnName](...args, config);

  return exports;
}, {});
