import React, {useLayoutEffect} from "react";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home/Home";
import Details from "../Screens/Details/Details";
import Second from "../Screens/Second/Second";
import Third from "../Screens/Third/Third";

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation, route}) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'Details') {
            navigation.setOptions({tabBarVisible: false});
        }else {
            navigation.setOptions({tabBarVisible: true});
        }
    }, [navigation, route])
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
}

const ThirdStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    );
  }

  export { MainStackNavigator, ThirdStackNavigator, };