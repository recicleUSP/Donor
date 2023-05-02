import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { Size20 } from "../../constants/scales";
import { ButtonDefault} from "../../components/buttons";
import { InputIconInRegister, InputIcon } from "../../components/inputs";
import { useState } from "react";
import { SizedBox } from 'sizedbox';
// import {RecyclingAdd} from '../RecyclingAdd';
// import { Firestore, Auth } from "../config/connection";
// import firebase from 'firebase';
// import 'firebase/firestore';

export function Collection() {
  // async function RecyclingAdd() {
  //   const db = firebase.firestore();
  //   db.collection('teste').add({
  //       name: 'John Doe',
  //       age: 30,
  //       email: 'johndoe@example.com'
  //   })
  //   .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id);
  //   })
  //   .catch((error) => {
  //       console.error('Error adding document: ', error);
  //   });
  // }
  //escolhas
  const [text, setText] = useState('');
  const [options, setOptions] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);
  const [showOptions, setShowOptions] = useState(false);

  const handleChangeText = (inputText) => {
    setText(inputText);
    setShowOptions(true);
  }

  const handleSelectOption = (optionValue) => {
    setText(optionValue);
    setShowOptions(false);
  }

  const renderOption = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectOption(item.value)} style={styles.option}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
  //textos
  const [textInputTipo,textInputSacola,textInputCaixas,textInputPeso, textInputObs, setTextInputObs] = useState('');
  const handleChangeTextInput1 = (inputText) => {
    setText(inputText);
  }
  return (
    // <View style={styles.container}>
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta</Text>
        </View>
        <TextInput
          style={styles.inputOptions}
          value={text}
          onChangeText={handleChangeText}
          placeholder="Endereço"
          placeholderTextColor="#ccc"
        />
        {showOptions && (
          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item.value}
            style={styles.options}
          />
        )}
        <TextInput
          style={styles.input}
          value={textInputTipo}
          onChangeText={handleChangeText}
          placeholder="Tipo"
          placeholderTextColor="#ccc"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SizedBox horizontal={10} />
        <TextInput
          style={styles.inputRow}
          value={textInputSacola}
          onChangeText={handleChangeTextInput1}
          placeholder="Sacolas"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.inputRow}
          value={textInputCaixas}
          onChangeText={handleChangeTextInput1}
          placeholder="Caixas"
          placeholderTextColor="#ccc"
        />
                  <SizedBox horizontal={10} />
        </View>
        <TextInput
          style={styles.input}
          value={textInputPeso}
          onChangeText={handleChangeTextInput1}
          placeholder="Peso estimado"
          placeholderTextColor="#ccc"
        />        
        <TextInput
          style={styles.inputBig}
          value={textInputObs}
          onChangeText={handleChangeTextInput1}
          placeholder="Observações"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Dias para a coleta</Text>
        </View>
        <TextInput
          style={styles.inputBig}
          value={textInputObs}
          onChangeText={handleChangeTextInput1}
          placeholder="Horários"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Resumo da Coleta</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SizedBox horizontal={10} />
        <TextInput
          style={styles.inputRow}
          value={textInputSacola}
          onChangeText={handleChangeTextInput1}
          placeholder="Material"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.inputRow}
          value={textInputCaixas}
          onChangeText={handleChangeTextInput1}
          placeholder="Quantidade"
          placeholderTextColor="#ccc"
        />
                  <SizedBox horizontal={10} />
        </View>
        <SizedBox vertical={10} />
        <View style={styles.divider} />
        <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Endereço:</Text>
          </View>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.divider} />
        <SizedBox vertical={10} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: 'black', textAlign: 'left', padding: 20, fontSize: 15 }}>Coletas: </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ButtonDefault
              title={"Cadastrar"}
              color={Colors[Theme][2]}
              textColor={Colors[Theme][7]}
              textSize={Size20}
              width={0.9}
              // fun={RecyclingAdd}
              // onPress={() => navigation.navigate('ButtonRoutes', { screen: 'Collection' })}
            />
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
    // </View>
  );
}