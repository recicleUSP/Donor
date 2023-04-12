import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";

import { ContainerTop } from "../../components/containers";
import { styles } from "./style";


export function Login() {
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('Sign');
  }

  return (
    <>
      <ContainerTop/>
      <Button 
          title="Sign"
          onPress={openScreen}
      />
    </>
  );
}
