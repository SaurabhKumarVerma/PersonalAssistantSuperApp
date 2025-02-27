import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './App';

// First register with AppRegistry
AppRegistry.registerComponent('main', () => App);

// Then register with Expo
registerRootComponent(App);
