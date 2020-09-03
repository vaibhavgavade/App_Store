import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './App/src/homeScreen';
import screenOne from './App/src/screenOne';
import wishList from './App/src/screenThree';
import {store, persistor} from './App/scene/redux/store/index';
import {Provider} from 'react-redux';
import DrawerItem from './App/scene/comp/drawerItem';
import phoneCall from './App/src/phoneCall';
import EmailMe from './App/src/emailme';
import {PersistGate} from 'redux-persist/es/integration/react';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const drawers = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerItem {...props} />}
      initialRouteName="Home"
      drawerStyle={{backgroundColor: '#98fb98', width: 240}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="wish"
        component={wishList}
        options={{title: 'WishList'}}
      />
      <Drawer.Screen
        name="phone"
        component={phoneCall}
        options={{title: 'Phone call'}}
      />
      <Drawer.Screen
        name="Email"
        component={EmailMe}
        options={{title: ' Send Email'}}
      />
    </Drawer.Navigator>
  );
};

const App = (props) => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen name="Home Screen" component={drawers} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="one"
              component={screenOne}
              options={{title: 'Product List'}}
            />
            <Stack.Screen
              name="wish"
              component={wishList}
              options={{title: 'Wish List'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
