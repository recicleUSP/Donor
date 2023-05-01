import { StyleSheet } from "react-native";
import { Height, Width, Size20, FontBold, FontRegular } from "../../constants/scales";
import { Colors, Theme } from "../../constants/setting";

export const styles = StyleSheet.create({
    main: {
      justifyContent: "center",
      alignItems: "center",
      minHeight: Height * 0.7,
      marginHorizontal: 20,
    },
    title: {
      fontSize: Size20,
      color: Colors[Theme][6],
      marginBottom: 10,
      ...FontBold
    },
    subtitle: {
      fontSize: Size20*1.25,
      color: Colors[Theme][6],
      ...FontRegular
    },
    row:{
      flexDirection:"row",
      alignItems:"center",
    },
    circle:{
      borderWidth: 3,
      borderRadius: 100,
      width: Width * 0.38,
      height: Width * 0.38,
      marginVertical: 40,
      alignItems: "center",
      justifyContent:"center",
      marginHorizontal: 8
    }
  });