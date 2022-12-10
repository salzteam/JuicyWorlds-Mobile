import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useSelector } from 'react-redux';


import Started from './src/screens/Started';
import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Forgot from './src/screens/Forgot';
import Home from './src/screens/Home';
import ScreenFavorite from "./src/screens/Favorite"
import ScreenPromo from "./src/screens/Promo"
import ProductDetail from "./src/screens/ProductDetail"


function App() {
  const Stack = createStackNavigator();
  const Token = useSelector(state => state.auth.userData.token);
  const privates = () => {
    if (Token) return Home;
    return Started
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Started"
      >
        <Stack.Screen
          name="Started"
          component={Token ? Home : Started}
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ScreenFavorite"
          component={ScreenFavorite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ScreenPromo"
          component={ScreenPromo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;