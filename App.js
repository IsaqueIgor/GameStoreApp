import React from 'react';
import styled from 'styled-components';
import Entypo from 'react-native-vector-icons/Entypo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home';
import Game from './src/Screens/Game';
import Live from './src/Screens/Live';
import Profile from './src/Screens/Profile';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 12,
  },
};

Entypo.loadFont();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Live':
              iconName = 'game-controller';
              break;
            case 'Profile':
              iconName = 'user';
              break;

            default:
              iconName = 'home';
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color='#ffffff' />
            </TabBarIconContainer>
          );
        },
      })}
    >
      <TabNav.Screen name='Home' component={Home} />
      <TabNav.Screen name='Live' component={Live} />
      <TabNav.Screen name='Profile' component={Profile} />
    </TabNav.Navigator>
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode='modal' headerMode='none'>
        <AppStack.Screen name='App' component={TabNavScreen} />
        <AppStack.Screen name='Game' component={Game} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

/*
  Colors:
  #3C4FFF,
  #FF1B4A,
  #040617
  #5F80FF,  

*/
const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? '#3C4FFF' : '#343434')};
  padding: 2px 16px;
  border-radius: 32px;
`;
