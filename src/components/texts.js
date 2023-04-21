import { Text, StyleSheet } from "react-native";
import { Colors, Theme } from "../constants/setting";
import { Size20, FontRegular } from "../constants/scales";

export const TextSimple = ({content}) => {
    return (
        <Text style={Style.textSimple}>{content}</Text>
    );
}

const Style = StyleSheet.create({
    textSimple : {
        color: Colors[Theme][5],
        fontSize: Size20,
        ...FontRegular
    }
})
