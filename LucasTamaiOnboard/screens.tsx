import { Navigation } from 'react-native-navigation';
import LoginPage from './LoginScreen';
import {UserListScreen} from './UserListScreen';


export function registerScreens() {
	Navigation.registerComponent('LoginPage', () => LoginPage);
    Navigation.registerComponent('UserListScreen', () => UserListScreen);
}