import { StyleSheet, Dimensions } from "react-native";
import { Width, Height, Size20, FontBold, FontRegular } from "../../constants/scales";
import { Colors, Theme } from "../../constants/setting";

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.8;

export const styles = StyleSheet.create({
  containerEdit: {
    alignSelf:"center",
    alignContent: "center",
    alignItems: "center",
    marginTop:17
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
  },
  inputBig: {
    height: 120,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
  },
  inputRow: {
    height: 50,
    width: 140,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
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
  containerOptions: {
    position: 'relative',
    width: '100%',
  },
  inputOptions: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  options: {
    position: 'absolute',
    top: 50,
    left: 12,
    right: 12,
    maxHeight: 200,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  bar: {
    width: '70%',
    height: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerBar: {
    width: '70%',
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  innerBar: {
    height: '100%',
    width: '40%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  divider: {
    height: 1,
    width: '70%',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors[Theme][2],
    padding: 16,
    borderRadius: 8,
    width: buttonWidth,
    alignSelf: 'center',
  },
  text2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 14,
    marginBottom: 14,
    width: 330,
    alignSelf: 'center', 
  },   
  textCard: {
    fontSize: 16,
    color: 'black',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label2: {
    fontSize: 16,
    marginBottom: 8,
  },
  selectedHour: {
    marginTop: 16,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black', 
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
});