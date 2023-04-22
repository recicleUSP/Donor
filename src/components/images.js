import { View, StyleSheet, Image } from "react-native";
import { Height } from "../constants/scales";
import { Colors, Theme } from "../constants/setting";

export const ImageCircle = ({
    size = Height*0.16,
    img = "",
    top = Height*0.093,
    align = "center"
}) => {
    return (
        <View style={{...Styles.circleContainer, height:size, width:size, top: top, alignSelf: align}}>
            <Image style={{...Styles.circleImage, height:size-8, width:size-8}} source={img} alt="Recicle++" />
        </View>
    );
}

export const ImageCircleHome = ({
    size = Height*0.16,
    img = "",
    top = Height*0.093,
    align = "flex-start"
}) => {
    return (
        <View style={{...Styles.circleContainer, height:size, width:size, top: top, alignSelf: align}}>
            <Image style={{...Styles.circleImage, height:size-8, width:size-8}} source={img} alt="Recicle++" />
        </View>
    );
}

const Styles = StyleSheet.create({
    circleContainer: {
        elevation: 0,
        zIndex: 1,
        marginLeft: 15,
        alignSelf:"center",
        position: "absolute",
        borderRadius: 100,
        backgroundColor: Colors[Theme][7],
    },
    circleImage: {
        borderRadius: 100,
        margin: 4
    }
})