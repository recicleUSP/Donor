import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister3 } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
import { SizedBox } from 'sizedbox';
import { DonorContext } from "../../contexts/donor/context";

export function Collection3({route}) {
  const {donorState, donorDispach} = useContext(DonorContext)
  const navigation = useNavigation();
  const [coleta, setColeta2] = useState();
  const [observacao, setObservacao2] = useState();

  const { tipo, endereco, caixas, sacolas, peso } = route.params;

  const nextPage = () => {
    console.log('Navegando para a Página 4');
    navigation.navigate('Collection4', { tipo, endereco, caixas, sacolas, peso, coleta, observacao});
  };

  return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister3/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta 2</Text>
        </View>   
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Observações</Text>
        </View>
        <TextInput
          style={styles.inputBig}
          value={observacao}
          onChangeText={setObservacao2}
          placeholder="Observações"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Dias para a coleta</Text>
        </View>
        <TextInput
          style={styles.inputBig}
          value={coleta}
          onChangeText={setColeta2}
          placeholder="Horários"
          placeholderTextColor="#ccc"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={nextPage}>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
  );
}