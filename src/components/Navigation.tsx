import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DashboardScreen from "../screens/DashboardScreen";
import PersonDetailsScreen from "../screens/PersonDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  PersonDetails: { userId: number };
};

const RootStack = createStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <RootStack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Dashboard" }}
        />
        <RootStack.Screen
          name="PersonDetails"
          component={PersonDetailsScreen}
          options={{ title: "Person" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
