import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Tarefas from '../pages/Tarefas';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';


const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={
        {
          activeTintColor: 'tomato',
          inactiveTintColor: '#ccc'
        }
      }>
        <Tab.Screen
        name="Login"
        component={Login}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-check"
                color={color}
                size={32} />
            )
          }
        } />
      <Tab.Screen
        name="Tarefas"
        component={Tarefas}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-check"
                color={color}
                size={32} />
            )
          }
        } />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={color}
                size={32} />
            )
          }
        } />
    </Tab.Navigator>
  )
}

export default AppRoutes;