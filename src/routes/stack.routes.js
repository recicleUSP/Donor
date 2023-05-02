import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home';
import { Collection } from '../screens/collection';

const Stack = createNativeStackNavigator();

function StackCollection() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
        //   component={Login} 
        //   options={{
        //     headerShown: false
        //   }}
        />
        <Stack.Screen 
          name="Collection" 
        //   component={Sign} 
        //   options={{
        //     headerShown: false
        //   }}
        />
    </Stack.Navigator>
  );
}