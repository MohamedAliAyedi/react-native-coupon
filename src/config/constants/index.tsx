const numberRegex = new RegExp('^[0-9]*$');
const URL_REGEX = new RegExp(
  '/(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?/\n',
);
const phoneReGEX = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
const gmailReGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const FONT = {
  regular: 'vazir-regular',
  semiBold: 'vazir-medium',
  medium: 'vazir-medium',
  bold: 'vazir-bold',
  black: 'vazir-bold',
  light: 'Cairo-Light',
};
const COLORS = {
  primary: '#FF3399',
  red: '#FC2248',
  black: '#000000',
  grey: '#999999',
  lightGrey: '#F3F3F3',
  darkBlue: '#0A3C5F',
  white: '#FFFFFF',
  BackgroundInput: 'rgba(0, 0, 0, 0.05)',
  blueCell: '#0066b8',
  backgroundGrey: '#707070',
  correctBlue: '#FF3399',
  greyCell: '#DBDBDB',
  blackGrey: '#666666',
  disabledGrey: '#e8e8e8',
  correctGrey: '#a3a2a7',
  orange: '#FF3399',
};
export {FONT, COLORS, URL_REGEX, phoneReGEX, numberRegex, gmailReGEX};
