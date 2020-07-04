import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// Screens:
import News from '../components/news';
import NewsArticleComponent from '../components/news/newsArticle';

import Games from '../components/games';
import GamesArticleComponent from '../components/games/gamesArticle';

// News Stack - Private
const NewsStack = createStackNavigator();
function NewsScreens() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News" component={News} />
      <NewsStack.Screen name="Article" component={NewsArticleComponent} />
    </NewsStack.Navigator>
  );
}

// Games Stack - Private
const GamesStack = createStackNavigator();
function GamesScreens() {
  return (
    <GamesStack.Navigator>
      <GamesStack.Screen name="Games" component={Games} />
      <GamesStack.Screen
        name="GamesArticle"
        component={GamesArticleComponent}
      />
    </GamesStack.Navigator>
  );
}

// AppStack - Private
const Tab = createBottomTabNavigator();
const AppScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreens} />
      <Tab.Screen name="Games" component={GamesScreens} />
    </Tab.Navigator>
  );
};

export const RootNavigatorPrivate = () => {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};
