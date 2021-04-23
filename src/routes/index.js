import React from 'react';

// * modules

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Ionicons} from '@expo/vector-icons';

// * components

import Home from './Home';
import NewBook from './NewBook';
import Profile from './Profile';
import ReadBook from './ReadBook';

// * utils

const UnicStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();

// * home stack

function HomeStackContainer() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ReadBook" component={ReadBook} />
    </HomeStack.Navigator>
  );
}

//

function Routes() {
  return (
    <NavigationContainer>
      <UnicStack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'NewBook') {
              iconName = focused ? 'add' : 'add-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'man' : 'man-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}>
        <UnicStack.Screen name="Home" component={HomeStackContainer} />
        <UnicStack.Screen
          name="NewBook"
          component={NewBook}
          options={{
            title: 'Add Book',
          }}
        />
        <UnicStack.Screen name="Profile" component={Profile} />
      </UnicStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
// Desenvolvido por Hubert Ryan
