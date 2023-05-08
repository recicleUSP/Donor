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
  const [tipo, setTipo] = useState();
  const [caixas, setCaixas] = useState();
  const [coleta, setColeta] = useState();
  const [endereco, setEndereco] = useState();
  const [observacao, setObservacao] = useState();
  const [peso, setPeso] = useState();
  const [sacolas, setSacolas] = useState();
  
  const [options, setOptions] = useState([
    { label: 'Option 1', value: 'Plástico' },
    { label: 'Option 2', value: 'Metal' },
    { label: 'Option 3', value: 'Eletrônico' },
  ]);
  const [showOptions, setShowOptions] = useState(false);

  async function addNewDocument(tipo, caixas, coleta, endereco, observacao, peso, sacolas) {
      try {
        const newDocRef = await addDoc(collection(firestore, 'recycling'), {
          tipo: tipo,
          caixas: caixas,
          coleta: coleta,
          endereco: endereco,
          observacao: observacao,
          peso: peso,
          sacolas: sacolas,
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
          onChangeText={setEndereco}
          placeholder="Endereço"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={setTipo}
          placeholder="Tipo"
          placeholderTextColor="#ccc"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SizedBox horizontal={10} />
        <TextInput
          style={styles.inputRow}
          value={sacolas}
          onChangeText={setSacolas}
          placeholder="Sacolas"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.inputRow}
          value={caixas}
          onChangeText={setCaixas}
          placeholder="Caixas"
          placeholderTextColor="#ccc"
        />
        <SizedBox horizontal={10} />
        </View>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          placeholder="Peso estimado"
          placeholderTextColor="#ccc"
        />        
        <TextInput
          style={styles.inputBig}
          value={observacao}
          onChangeText={setObservacao}
          placeholder="Observações"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Dias para a coleta</Text>
        </View>
        <TextInput
          style={styles.inputBig}
          value={coleta}
          onChangeText={setColeta}
          placeholder="Horários"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={
          ()=>addNewDocument(tipo, caixas, coleta, endereco, observacao, peso, sacolas)
          }>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
  );
}