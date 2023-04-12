import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";

import { ContainerTop } from "../../components/containers";
import { styles } from "./style";


export function Sign() {

  function openScreen(){
    const navigation = useNavigation();
    navigation.navigate('Sign');
  }

  return (
    <>
       <ContainerTop/>
       <View>

       </View>
    </>
  );
}
