import { Text, View, Image, StyleSheet } from "react-native";
import { SimpleIcon } from "../components/icons";
import { Colors, Theme, Name } from "../constants/setting";
import { Size110, Size28, Height, FontBold } from "../constants/scales"

export const ContainerTop = () => {
    const img = require("../../assets/images/logo.png");
    return (
        <View style={styles.containerTop}>
            <Image style={styles.logo} source={img} alt="Recicle++" />
            <Text style={styles.textTop}>{Name}</Text>
        </View>
    );
};

export const ContainerData = ({
    children,           // Componente filho do container
    title               // titulo da rotina do container
}) => {

    return (
        <View style={styles.containerData}>
            <Text style={styles.textData}>{title}</Text>
            {children}
        </View>
    )
};


const styles = StyleSheet.create({
    containerTop: {
      height: Height * 0.3,
      backgroundColor: Colors[Theme][2],
      alignItems: "center",
      verticalAlign: "bottom",
      textAlignVertical: "bottom",
      paddingTop: Height * 0.05
    },
    textTop: {
        paddingTop: Height * 0.02,
        color: Colors[Theme][7],
        fontSize: Size28,
        ...FontBold
    },
    logo: {
        margin: Height * 0.01,
        width: Size110,
        height: Size110,
      },

    containerData: {
        padding: Size28,
        backgroundColor: Colors[Theme][1],
        alignItems: "center",
        verticalAlign: "bottom",
        textAlignVertical: "bottom",
    },
    textData: {
        alignSelf: "flex-start",
        color: Colors[Theme][6],
        marginBottom: Size28,
        fontSize: Size28,
        ...FontBold
    },
   
});