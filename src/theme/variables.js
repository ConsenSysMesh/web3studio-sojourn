import material from 'native-base/src/theme/variables/commonColor';
import DeviceInfo from 'react-native-device-info';
import merge from 'deepmerge';

const brandPrimary = '#C84F0E';

const gray = {
  900: '#000',
  600: '#444F6C',
  300: '#888FA1',
  100: '#ECECEC',
  50: '#FAFAFA',
  0: '#fff'
};

export default merge(material, {
  brandPrimary,
  fontFamily: 'Nunito-Regular',
  iconFamily: 'MaterialCommunityIcons',

  // Title
  titleFontfamily: 'Nunito-SemiBold',
  titleFontColor: brandPrimary,

  // Header
  toolbarBtnColor: gray[600],
  toolbarBtnTextColor: gray[600],
  toolbarDefaultBg: gray[0],

  //Container
  containerBgColor: gray[50],

  // List
  listNoteColor: gray[300],
  listNoteSize: 10,

  // Button
  btnFontFamily: 'Nunito-SemiBold',

  // InputGroup
  inputBorderColor: gray[300],
  inputColorPlaceholder: gray[300],

  // Other
  isIphoneX: DeviceInfo.hasNotch()
});
