import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ThirdStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Third" component={ThirdStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;