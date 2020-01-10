import { registerScreens } from './screens'
import { Navigation } from 'react-native-navigation'
import React from 'react'



registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "LoginPage"
      }
    }
  });
});