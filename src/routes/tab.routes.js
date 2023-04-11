import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleIcon } from '../components/icons'
import { Colors,Theme } from '../constants/setting'

const Tab = createBottomTabNavigator();

import { Home }   from "../screens/home"
import { Advice } from "../screens/advice"
import { Notice } from "../screens/notice"
import { Profile } from "../screens/profile"

function TabsRoutes() {
  const iconSize = 25;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[Theme][2],
        tabBarInactiveTintColor: Colors[Theme][5],
        tabBarStyle: { 
          height: 55, 
          paddingBottom: 8,
          paddingTop: 5,
          backgroundColor: Colors[Theme][0],
        },
      }}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (<SimpleIcon name="account" color={color} size={iconSize} />),
        }}
      />
      <Tab.Screen 
        name="Advice" 
        component={Advice} 
        options={{
          title: "Avisos",
          tabBarIcon: ({ color }) => <SimpleIcon name="alert-octagon" color={color}  size={iconSize} />,          
        }}
      />
      <Tab.Screen 
        name="Notice" 
        component={Notice} 
        options={{
          title: "Notificação",
          tabBarIcon: ({ color }) => ( <SimpleIcon name="bell" color={color} size={iconSize} />),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => ( <SimpleIcon name="recycle" color={color}  size={iconSize} />),
        }}
      />
      
    </Tab.Navigator>
  );
}


export {TabsRoutes};