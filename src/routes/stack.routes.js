import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home';
import { Collection } from '../screens/collection';

const Stack = createNativeStackNavigator();

function StackCollection() {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="Collection" 
          component={Collection} 
        />
    </Stack.Navigator>
  );
}

export {StackCollection};