import { Text, StyleSheet } from "react-native";
import { Colors, Theme } from "../constants/setting";
import { Size20, FontRegular, FontBold } from "../constants/scales";

export const TextSimple = ({content}) => {
    return (
        <Text style={Style.textSimple}>{content}</Text>
    );
}
export const TextSimpleOpposite = ({
    content,
    alignH = "center",
}) => {
    return (
        <Text style={{...Style.textSimpleOpposite, alignSelf:alignH}}>{content}</Text>
    );
}

const Style = StyleSheet.create({
    textSimple : {
        color: Colors[Theme][5],
        fontSize: Size20,
        ...FontRegular
    },
    textSimpleOpposite : {
        color: Colors[Theme][7],
        fontSize: Size20*0.90,
        ...FontBold
    }
})
