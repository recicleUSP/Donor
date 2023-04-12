import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { SimpleIcon } from "../components/icons";
import { Colors, Theme, Name } from "../constants/setting";
import { Size130, Size28, Height, FontBold } from "../constants/scales"

export const ContainerTop = ({children}) => {
    return (
        <View style={styles.container}>
            <SimpleIcon name="leaf" color={Colors[Theme][7]}  size={Size130} />
            <Text style={styles.text}>{Name}</Text>
        </View>
    );
}


export const styles = StyleSheet.create({
    container: {
      flex: 0.25,
      backgroundColor: Colors[Theme][3],
      alignItems: "center",
      verticalAlign: "bottom",
      textAlignVertical: "bottom",
      paddingTop: Height * 0.05
    },
    text: {
        paddingTop: Height * 0.02,
        color: Colors[Theme][7],
        fontSize: Size28,
        ...FontBold
      },
   
  });