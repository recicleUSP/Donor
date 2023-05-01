import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTopTitle } from "../../components/containers";


export function Notice() {

  function openScreen(){
    const navigation = useNavigation();
    navigation.navigate('Sign' as never);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ContainerTopTitle title={"Notificações"}/>
      </ScrollView>
    </View>
  );
}
