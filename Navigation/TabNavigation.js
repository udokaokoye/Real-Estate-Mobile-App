import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import { MainStackNavigator, ThirdStackNavigator } from "./StackNavigator";
import { StyleSheet, Text, View, Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style:{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            elevation: 0,
            // backgroundColor: 'red',
            height:Platform.OS == 'android' ? 70 : 90,
            paddingHorizontal: 29
    }
     }}>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{ tabBarIcon: ({focused}) => (
          <TouchableOpacity style={styles.activeTab}>
                <Ionicons name='home' size={22} color='#2fabbe' />
                <Text style={styles.homeTabText}>HOME</Text>
          </TouchableOpacity>
      ) }} />
      <Tab.Screen name="Fave" component={ThirdStackNavigator} options={{ tabBarIcon: ({focused}) => (
          <View style={styles.tab}>
                <Ionicons name='heart' size={22} color='#c7cbd7' />
          </View>
      ) }} />
      <Tab.Screen name="Saved" component={ThirdStackNavigator} options={{ tabBarIcon: ({focused}) => (
          <View style={styles.tab}>
                <Ionicons name='bookmark' size={22} color='#c7cbd7' />
          </View>
      ) }} />
      <Tab.Screen name="Account" component={ThirdStackNavigator} options={{ tabBarIcon: ({focused}) => (
          <View style={styles.tab}>
                <Ionicons name='person' size={22} color='#c7cbd7' />
          </View>
      ) }} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
    tab: {
        width: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 23,
        paddingVertical: 5,
    },
    activeTab: {
        backgroundColor: '#d4f2f8',
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 23,
        paddingVertical: 7,
        borderRadius: 5
    },
    homeTabText: {
        marginLeft: 8,
        color: '#2fabbe',
    }
})

export default BottomTabNavigator;