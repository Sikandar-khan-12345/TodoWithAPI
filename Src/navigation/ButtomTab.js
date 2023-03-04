import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {IconPath} from '../Assets';
import Login from '../screens/Before_Login/Login';
import DrawerNavigation from './DrawerNavigation';
import Colors from '../constents/Colors';
const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarHideOnKeyboard: true,
        tabBarstyle: {
          backgroundColor: '#1a3c43',
        },
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'LOGIN',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.cart2}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          tabBarLabel: 'HOME',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.home}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
          // tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTab;
