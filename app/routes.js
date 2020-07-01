import React, {Component} from 'react';
import {Platform} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens:
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';

// AppStack
const Tab = createBottomTabNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Games" component={Games} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// AuthStack
const AuthStack = createStackNavigator({
  SignIn,
});

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'Auth',
      },
    ),
  );
};
