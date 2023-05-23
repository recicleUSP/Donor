import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';

import { Home } from '../screens/home';
import { Collection } from '../screens/collection';
import { Collection2 } from '../screens/collection/index2';
import { Collection3 } from '../screens/collection/index3';
import { Collection4 } from '../screens/collection/index4';

const Stack = createNativeStackNavigator();

function StackCollection() {
  // const handleGoBack = ({ navigation }) => {
  //   navigation.goBack();
  // };

  // const headerLeftComponent = ({ navigation }) => (
  //   <TouchableOpacity onPress={() => handleGoBack({ navigation })}>
  //     <Image source={require('path/to/your/back-icon.png')} />
  //   </TouchableOpacity>
  // );
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Collection" 
          component={Collection} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Collection2" 
          component={Collection2} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Collection3" 
          component={Collection3} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Collection4" 
          component={Collection4} 
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}

export {StackCollection};