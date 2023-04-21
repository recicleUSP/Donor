import { Text, View, ScrollView } from "react-native";
import { ContainerTopClean } from "../../components/containers";
import { ImageCircle } from "../../components/images";
import { SizedBox } from "sizedbox"
import { Styles } from "./style";


export function Profile() {
  const profileDefault = require("../../../assets/images/profile.webp");
  return (
    <View style={Styles.container}>
      <ScrollView>
        <ContainerTopClean
          icon="exit-to-app"
          iconTxt="Sair"
          fun={()=>{}}
        />
        <ImageCircle
          size={150}
          img={profileDefault}
        />

        <SizedBox vertical={40}/>
        <Text> Profile Test </Text>
      </ScrollView>
    </View>
  );
}
