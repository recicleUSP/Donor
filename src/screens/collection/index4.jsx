import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister4 } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { SizedBox } from 'sizedbox';
import { setDoc, getDoc, collection , addDoc, getFirestore, firebaseApp } from "firebase/firestore";

export function Collection4({route}) {
  const firestore = getFirestore(firebaseApp);
  const navigation = useNavigation();

  const { tipo, endereco, caixas, sacolas, peso, selectedDay, selectedHour, observacao  } = route.params;

  async function addNewDocument(tipo, caixas, selectedDay, selectedHour, endereco, observacao, peso, sacolas) {
    try {
      const newDocRef = await addDoc(collection(firestore, 'recycling'), {
        tipo: tipo,
        caixas: caixas,
        hora: selectedHour,
        dia: selectedDay,
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
        <ContainerTopRegister4/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Resumo da Coleta</Text>
        </View>   
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Material: {tipo}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Quantidade: {caixas}caixas e {sacolas}sacolas</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Endereço: {endereco}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Coletas: dia {selectedDay} e hora {selectedHour}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Observação: {observacao}</Text>
        </View>
        <SizedBox vertical={30} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={
          ()=>addNewDocument(tipo, caixas, selectedDay, selectedHour, endereco, observacao, peso, sacolas)
          }>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} /> 
      </ScrollView>
  );
}