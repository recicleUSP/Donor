import { StyleSheet, Dimensions } from "react-native";
import { Width } from "../../constants/scales";
import { Colors, Theme } from "../../constants/setting";

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.8;

export const styles = StyleSheet.create({
    circularButtonContainer: {
      backgroundColor: '#10b981', // Altere aqui para a cor verde desejada
      borderRadius: 80, // Usar um valor grande para criar um círculo perfeito
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card:{  
      alignSelf:"center",
      alignContent: "center",
      alignItems: "center",
      marginTop:17,
      elevation: 3,
      zIndex: 1,
      justifyContent: "center",
      width: Width * 0.85,
      borderRadius: 10,
      padding: 10,
      backgroundColor: Colors[Theme][1],
      //alignItems:"center",
      marginBottom: 15,
    },
    barContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    bar: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    barFill: {
      width: 20,
    },
    barText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    legend: {
      marginTop: 5,
      fontSize: 10,
      color: 'gray',
    },
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
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
    button: {
      backgroundColor: Colors[Theme][2],
      padding: 16,
      borderRadius: 8,
      width: buttonWidth,
      alignSelf: 'center',
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    card2: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      padding: 14,
      marginBottom: 14,
      width: width*0.9,
      alignSelf: 'center', 
    },    
    textCard: {
      fontSize: 16,
      color: 'black',
    },
    containerEdit: {
      alignSelf:"center",
      alignContent: "center",
      alignItems: "center",
      marginTop:17
    },
    containerFlutuante: {
      position: 'absolute',
      bottom: 16,
      right: 16,
    },
    buttonFlutuante: {
      backgroundColor: Colors[Theme][2],
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
    },
    buttonTextFlutuante: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    button2: {
      backgroundColor: Colors[Theme][2],
      borderRadius: 20,
      paddingVertical: 16,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
    },
  });