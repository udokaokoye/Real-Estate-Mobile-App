import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Screens/Home/Home';
import Details from './Screens/Details/Details';
import DrawerNavigator from './Navigation/DrawerNavigation';
const Stack = createStackNavigator();
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </NavigationContainer>

    
  );
}