import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useState } from "react";
import { SizedBox } from 'sizedbox';
// import { addNewDocument } from "../../firebase/providers/recicle";
import { setDoc, getDoc, collection , addDoc, getFirestore, firebaseApp } from "firebase/firestore";

export function Collection({}) {
  const navigation = useNavigation();
  const firestore = getFirestore(firebaseApp);
  const [tipo, caixas, coleta, endereco, observacao, peso, sacolas] = useState(null);
  
  const [options, setOptions] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);
  const [showOptions, setShowOptions] = useState(false);

  async function addNewDocument() {
      try {
        const newDocRef = await addDoc(collection(firestore, 'recycling'), {
          tipo: 'Plástico',
          caixas: 2,
          coleta: 'Semanal',
          endereco: 'Rua da Reciclagem, 123',
          observacao: 'Deixar na portaria',
          peso: 5.2,
          sacolas: 1,
          // tipo: tipo,
          // caixas: caixas,
          // coleta: coleta,
          // endereco: endereco,
          // observacao: observacao,
          // peso: peso,
          // sacolas: sacolas,
        });
        console.log('Documento adicionado com ID:', newDocRef.id);
        navigation.navigate('Home')
      } catch (error) {
        console.error('Erro ao adicionar documento:', error);
      }
  }

  return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta</Text>
        </View>
        <TextInput
          style={styles.inputOptions}
          value={endereco}
          onChangeText={endereco}
          placeholder="Endereço"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={tipo}
          placeholder="Tipo"
          placeholderTextColor="#ccc"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SizedBox horizontal={10} />
        <TextInput
          style={styles.inputRow}
          value={sacolas}
          onChangeText={sacolas}
          placeholder="Sacolas"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.inputRow}
          value={caixas}
          onChangeText={caixas}
          placeholder="Caixas"
          placeholderTextColor="#ccc"
        />
        <SizedBox horizontal={10} />
        </View>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={peso}
          placeholder="Peso estimado"
          placeholderTextColor="#ccc"
        />        
        <TextInput
          style={styles.inputBig}
          value={observacao}
          onChangeText={observacao}
          placeholder="Observações"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Dias para a coleta</Text>
        </View>
        <TextInput
          style={styles.inputBig}
          value={coleta}
          onChangeText={coleta}
          placeholder="Horários"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Resumo da Coleta</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SizedBox horizontal={10} />
        {/* <TextInput
          style={styles.inputRow}
          value={textInputSacola}
          onChangeText={}
          placeholder="Material"
          placeholderTextColor="#ccc"
        /> */}
        {/* <TextInput
          style={styles.inputRow}
          value={textInputCaixas}
          onChangeText={handleChangeTextInput1}
          placeholder="Quantidade"
          placeholderTextColor="#ccc"
        /> */}
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
        <TouchableOpacity style={styles.button} onPress={
          ()=>addNewDocument()
          }>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
  );
}