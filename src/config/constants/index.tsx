const URL = 'URL GOES HERE';
const numberRegex = new RegExp('^[0-9]*$');
const URL_REGEX = new RegExp(
  '/(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?/\n',
);
const phoneReGEX = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
const gmailReGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const COLORS = {
  primary: '#FF3399',
  red: '#FC2248',
  black: '#000000',
  dark: '#333333',
  darkGrey: '#797979',
  grey: '#999999',
  lightGrey: '#cacaca',
  blue: '#0066B8',
  lightBlue: '#19bbd5',
  darkBlue: '#0A3C5F',
  yellow: '#fdf1ac',
  white: '#FFFFFF',
  backgroundColor: '#FBFCFF',
  lightGreen: '#4FE1BE',
  danger: '#F32013',
  BackgroundInput: 'rgba(0, 0, 0, 0.05)',
  backgroundSettingsButton: 'rgba(10, 60, 95, 0.04)',
  blueCell: '#0066b8',
  backgroundGrey: '#707070',
  blueButtonStart: '#0E6ABB',
  backgroundInputDisabled: '#F6F7FA',
};
export { COLORS, URL_REGEX, phoneReGEX, numberRegex, gmailReGEX, URL};
