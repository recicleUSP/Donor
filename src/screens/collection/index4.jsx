import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister4 } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { SizedBox } from 'sizedbox';
import { firebaseApp } from "firebase/firestore";
import { getDatabase, push, ref } from "firebase/database";
import { DonorContext } from "../../contexts/donor/context";
import { useContext } from "react";

export function Collection4({route}) {
  const {donorState, donorDispach} = useContext(DonorContext)
  const basedImage = require("../../../assets/images/profile.webp");
  const navigation = useNavigation();
  const database = getDatabase(firebaseApp);

  const user = {
    id: donorState.uid,
    name: donorState.name,
    photo: basedImage,
  };

  const coletor = {
    id: "none",
    name: "none",
    photo: "none",
  };

  const { tipo, endereco, caixas, sacolas, peso, dia, hora, observacao } = route.params;

  async function addNewDocument(tipo, caixas, dia, hora, endereco, observacao, peso, sacolas, user, coletor) {
    try {
      const userData = {
        id: user?.id || "none",
        name: user?.name || "none",
        photo: user?.photo || "none",
      };
  
      const newDocRef = await push(ref(database, 'recyclable'), {
        tipo: tipo,
        caixas: caixas,
        hora: hora,
        dia: dia,
        endereco: endereco,
        observacao: observacao,
        peso: peso,
        sacolas: sacolas,
        user: userData,
        status: "pending",
        collector: coletor,
      });
  
      console.log('Documento adicionado com ID:', newDocRef.key);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  }

  return (
    <ScrollView>
      <ContainerTop />
      <ContainerTopRegister4 />
      <View style={styles.container}>
        <Text style={styles.titleText}>Resumo da Coleta</Text>
        <Text style={styles.labelText}>Material: {tipo}</Text>
        <Text style={styles.labelText}>Quantidade: {caixas} caixas e {sacolas} sacolas</Text>
        <Text style={styles.labelText}>Endereço: {endereco}</Text>
        <Text style={styles.labelText}>Coletas: dia {dia} e hora {hora}</Text>
        <Text style={styles.labelText}>Observação: {observacao}</Text>
        <SizedBox vertical={30} />
        <TouchableOpacity style={styles.button2} onPress={() => addNewDocument(tipo, caixas, dia, hora, endereco, observacao, peso, sacolas, user, coletor)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <SizedBox vertical={30} />
      </View>
    </ScrollView>
  );
}
