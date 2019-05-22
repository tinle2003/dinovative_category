/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import editInfo from './src/component/editInfo.js';
import Category from './src/component/Category.js';
import { YellowBox } from 'react-native';

AppRegistry.registerComponent(appName, () => Category);
