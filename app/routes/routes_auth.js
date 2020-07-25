import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// Screens:
import SignIn from '../components/auth';

import News from '../components/news';
import NewsArticleComponent from '../components/news/newsArticle';

import Games from '../components/games';
import GamesArticleComponent from '../components/games/gamesArticle';

// Styles
import Logo from '../utils/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';

// AuthStack - SignIn/Register - Public
const AuthStack = createStackNavigator();
function AuthScreens() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={SignIn}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#001338',
          },
        }}
      />
    </AuthStack.Navigator>
  );
}

export const RootNavigatorAuth = ({updateState}) => {
  return (
    <NavigationContainer>
      <AuthScreens />
    </NavigationContainer>
  );
};

const headerConf = {
  // title: 'My home',
  headerStyle: {
    backgroundColor: '#001338',
  },
  headerTitle: Logo,
  headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
  headerLeft: null,
  // headerLeft: () => <Button title="Login" color="#fff" />,
};

// News Stack - Private
const NewsStack = createStackNavigator();
function NewsScreens() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News" component={News} options={headerConf} />
      <NewsStack.Screen
        name="Article"
        component={NewsArticleComponent}
        options={headerConf}
      />
    </NewsStack.Navigator>
  );
}

// Games Stack - Private
const GamesStack = createStackNavigator();
function GamesScreens() {
  return (
    <GamesStack.Navigator>
      <GamesStack.Screen name="Games" component={Games} options={headerConf} />
      <GamesStack.Screen
        name="GamesArticle"
        component={GamesArticleComponent}
        options={headerConf}
      />
    </GamesStack.Navigator>
  );
}

const tabBarOptions = {
  activeTintColor: '#fff',
  showLabel: false,
  activeBackgroundColor: '#00194b',
  inactiveBackgroundColor: '#001338',
  style: {
    backgroundColor: '#001338',
  },
};
// AppStack - Private
const AppStackTab = createBottomTabNavigator();
const AppScreens = () => {
  return (
    <AppStackTab.Navigator
      tabBarOptions={tabBarOptions}
      initialRouteName="News">
      <AppStackTab.Screen
        name="News"
        children={NewsScreens}
        options={{
          tabBarIcon: ({focused}) => {
            let tintColor = '#fff';
            return (
              <Ionicons name="basketball-outline" size={25} color={tintColor} />
            );
          },
        }}
      />
      <AppStackTab.Screen
        name="Games"
        children={GamesScreens}
        options={{
          tabBarIcon: ({focused}) => {
            let tintColor = '#fff';
            return <Ionicons name="tv-outline" size={25} color={tintColor} />;
          },
        }}
      />
    </AppStackTab.Navigator>
  );
};

export const RootNavigatorPrivate = () => {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};

const AppV2 = createStackNavigator();
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppV2.Navigator>
        <AppV2.Screen
          name="Auth"
          children={AuthScreens}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#001338',
            },
            headerLeft: null,
          }}
        />
        <AppV2.Screen name="App" children={AppScreens} options={headerConf} />
      </AppV2.Navigator>
    </NavigationContainer>
  );
};
