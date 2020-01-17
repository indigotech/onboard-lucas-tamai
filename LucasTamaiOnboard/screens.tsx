import { Navigation } from 'react-native-navigation';
import LoginPage from './LoginScreen';
import {UserListScreen} from './UserListScreen';
import {NewUserScreen} from './NewUserScreen';
import { UserDetails } from './UserDetailsScreen';


export function registerScreens() {
	Navigation.registerComponent('LoginPage', () => LoginPage);
    Navigation.registerComponent('UserListScreen', () => UserListScreen);
    Navigation.registerComponent('NewUserScreen', () => NewUserScreen);
    Navigation.registerComponent('UserDetails', () => UserDetails);

}