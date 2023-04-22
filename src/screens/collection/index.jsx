import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import { styles } from "./style";

export function Collection() {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <ContainerTop/>
        <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.title}>Cadastro</Text>
        </View>
        </View>
        </ScrollView>
    </View>
  );
}