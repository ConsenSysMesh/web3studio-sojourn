import material from 'native-base/src/theme/variables/commonColor';
import DeviceInfo from 'react-native-device-info';
import merge from 'deepmerge';

const brandPrimary = '#C84F0E';

export default merge(material, {
  brandPrimary,
  fontFamily: 'Nunito-Regular',
  iconFamily: 'MaterialCommunityIcons',

  // Title
  titleFontfamily: 'Nunito-SemiBold',
  titleFontColor: brandPrimary,

  // Header
  toolbarBtnColor: brandPrimary,
  toolbarDefaultBg: '#fff',

  // List
  listNoteColor: '#757575',
  listNoteSize: 10,

  //Container
  containerBgColor: '#FAFAFA',

  // Button
  btnFontFamily: 'Nunito-SemiBold',

  // Other
  isIphoneX: DeviceInfo.hasNotch
});
