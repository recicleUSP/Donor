import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import { styles } from "./style";


export function Login() {
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('Sign' as never);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Login</Text>
        <Button 
          title="Sign"
          onPress={openScreen}
        />
      </View>
    </View>
  );
}
