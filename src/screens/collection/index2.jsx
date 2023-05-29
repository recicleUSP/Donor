import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister2 } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
import { SizedBox } from 'sizedbox';
import { DonorContext } from "../../contexts/donor/context";

export function Collection2({ route }) {
  const {donorState, donorDispach} = useContext(DonorContext)
  const navigation = useNavigation();
  const [caixas, setCaixas2] = useState();
  const [sacolas, setSacolas2] = useState();
  const [peso, setPeso2] = useState();

  const { tipo, endereco } = route.params;

  const nextPage = () => {
    console.log('Navegando para a Página 3');
    navigation.navigate('Collection3', { tipo, endereco, caixas, sacolas, peso});
  };

  return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister2/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta 2</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Quantidade</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SizedBox horizontal={10} />
        <TextInput
          style={styles.inputRow}
          value={sacolas}
          onChangeText={setSacolas2}
          placeholder="Sacolas"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.inputRow}
          value={caixas}
          onChangeText={setCaixas2}
          placeholder="Caixas"
          placeholderTextColor="#ccc"
        />
        <SizedBox horizontal={10} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Peso</Text>
        </View>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso2}
          placeholder="Peso estimado em KG, exemplo 4Kg"
          placeholderTextColor="#ccc"
        />        
        <SizedBox vertical={30} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={nextPage}>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
  );
}