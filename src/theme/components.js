import getTheme from 'native-base/src/theme/components';
import merge from 'deepmerge';

export default variables =>
  merge(getTheme(variables), {
    'NativeBase.Title': {
      fontWeight: undefined
    }
  });
