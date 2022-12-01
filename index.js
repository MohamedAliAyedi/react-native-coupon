/**
 * @format
 */

import {AppRegistry, I18nManager, Platform} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import KeyboardManager from 'react-native-keyboard-manager';
import {COLORS} from './src/config/constants';
import RNRestart from 'react-native-restart'; // Import package from node modules
import i18next from 'i18next';

// if (i18next.language === 'ar' && !I18nManager.isRTL) {
//   I18nManager.forceRTL(true);
//   RNRestart.Restart();
// }
//Ignoring phone language
if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(true);
  KeyboardManager.setToolbarDoneBarButtonItemText('Done');
  KeyboardManager.setToolbarManageBehaviourBy('subviews'); // "subviews" | "tag" | "position"
  KeyboardManager.setToolbarPreviousNextButtonEnable(false);
  KeyboardManager.setToolbarTintColor(COLORS.blue); // Only #000000 format is supported
  KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
  KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setOverrideKeyboardAppearance(false);
  KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
  KeyboardManager.isKeyboardShowing().then(isShowing => {
    // ...
  });
}
AppRegistry.registerComponent(appName, () => App);
