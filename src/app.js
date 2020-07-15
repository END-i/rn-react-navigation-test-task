import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Profile, News } from './screens';
import { BottomTab } from './components';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="News" component={News} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
