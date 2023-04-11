import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Home }   from "../screens/home"
import { Advice } from "../screens/advice"
import { Notice } from "../screens/notice"
import { Profile } from "../screens/profile"

function TabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Advice" component={Advice} />
      <Tab.Screen name="Notice" component={Notice} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export {TabsRoutes};