import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
    block: {
      marginHorizontal: 20,
      marginVertical: 5
    },
    row: {
      flexDirection:"row",
      alignContent:"center",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });