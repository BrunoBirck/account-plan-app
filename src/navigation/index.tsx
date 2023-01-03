import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import AccountPlanDetail from '../pages/AccountPlanDetail';
import { Theme } from '../theme/theme';

const AppNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Theme.primary500
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          lazy: false,
        })}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AccountPlanDetail"
          component={AccountPlanDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;