import React from "react";
import { Home, SeeAll } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Test from "../screens/Test";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Test") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }
          // else if (route.name === "Settings") {
          //   iconName = focused ? "ios-list" : "ios-list-outline";
          // }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Test" component={TestStackScreen} />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen
        options={{
          headerShown: true,
        }}
        name="SeeAll"
        component={SeeAll}
      />
    </HomeStack.Navigator>
  );
}

const TestStack = createNativeStackNavigator();

function TestStackScreen() {
  return (
    <TestStack.Navigator screenOptions={{ headerShown: false }}>
      <TestStack.Screen name="TestPage" component={Test} />
    </TestStack.Navigator>
  );
}
