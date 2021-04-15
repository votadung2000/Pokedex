import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Context } from './src/context';
import store from './src/store';

import routes from './src/routes'
import Home from './src/containers/Home'
import Detail from './src/containers/Detail'
import Scanner from './src/containers/Scanner'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={routes.HOME}
      >
        <Stack.Screen name={routes.HOME} component={Home} />
        <Stack.Screen name={routes.DETAIL} component={Detail} />
        <Stack.Screen name={routes.SCANNER} component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Context.Provider value={store}>
      <StackNavigator />
    </Context.Provider>
  )
}

export default App;