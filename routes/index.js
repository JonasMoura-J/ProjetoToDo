import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {

  const user = true;

  return (
    <NavigationContainer>
      {
        user ?
          <AppRoutes />
          :
          <AuthRoutes />
      }
    </NavigationContainer>

  )
};

export default Routes;