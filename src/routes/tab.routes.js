import * as React from "react";
// import { NavigationContainer } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SimpleIcon } from '../components/icons'
import { Colors,Theme } from '../constants/setting'
import { Size28 } from '../constants/scales'
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Home }   from "../screens/home"
import { Advice } from "../screens/advice"
import { Notice } from "../screens/notice"
import { Profile } from "../screens/profile"
import { Collection } from "../screens/collection"
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

function ButtonRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Collection" component={Collection} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export {ButtonRoutes};

function TabsRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[Theme][2],
        tabBarInactiveTintColor: Colors[Theme][5],
        tabBarStyle: { 
          borderTopColor: Colors[Theme][0],
          backgroundColor: Colors[Theme][0],
          opacity: 0.85,
          height: 55, 
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (<SimpleIcon name="account" color={color} size={Size28} />),
        }}
      />
      <Tab.Screen 
        name="Advice" 
        component={Advice} 
        options={{
          title: "Avisos",
          tabBarIcon: ({ color }) => <SimpleIcon name="alert-octagon" color={color}  size={Size28} />,          
        }}
      />
      <Tab.Screen 
        name="Notice" 
        component={Notice} 
        options={{
          title: "Notificação",
          tabBarIcon: ({ color }) => ( <SimpleIcon name="bell" color={color} size={Size28} />),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => ( <SimpleIcon name="recycle" color={color}  size={Size28} />),
        }}
      />     
    </Tab.Navigator>
  );
}


export {TabsRoutes};
