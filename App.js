import React from 'react';
import {Text,View} from 'react-native';

import {StackNavigator} from 'react-navigation';
import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'

//Navigation for the App Screens
const Navigation = StackNavigator({
    
        First:{screen:FirstScreen},
        Second:{screen:SecondScreen}
});


export default Navigation;