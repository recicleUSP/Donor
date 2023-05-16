import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home';
import { Collection } from '../screens/collection';
import { Collection2 } from '../screens/collection/index2';
import { Collection3 } from '../screens/collection/index3';
import { Collection4 } from '../screens/collection/index4';

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
        <Stack.Screen 
          name="Collection2" 
          component={Collection2} 
        />
        <Stack.Screen 
          name="Collection3" 
          component={Collection3} 
        />
        <Stack.Screen 
          name="Collection4" 
          component={Collection4} 
        />
    </Stack.Navigator>
  );
}

export {StackCollection};