import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
import { SizedBox } from 'sizedbox';
import { setDoc, getDoc, collection , addDoc, getFirestore, firebaseApp } from "firebase/firestore";
import { Checkbox } from 'react-native-paper';
import { DonorContext } from "../../contexts/donor/context";
import { RegisterAddress } from "../address";
import { AddressCard2 } from "../address/components/card";

export function Collection({}) {
  const navigation = useNavigation();
  const firestore = getFirestore(firebaseApp);
  const {donorState, donorDispach} = useContext(DonorContext)
  const [tipo, setTipo] = useState();
  const [caixas, setCaixas] = useState();
  const [coleta, setColeta] = useState();
  const [endereco, setEndereco] = useState();
  const [observacao, setObservacao] = useState();
  const [peso, setPeso] = useState();
  const [sacolas, setSacolas] = useState();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checkString, setCheckedString] = useState([]);

  const checkBoxString = (value) => {
    if(checkString.includes(value)){
      const index = checkString.indexOf(value);
      if(index != -1){
        const updatedItens = [...checkString];
        updatedItens.splice(index, 1);
        setCheckedString(updatedItens);
      }
    } else{setCheckedString([...checkString,value])}
  }

  const handleCheckbox1Press = () => {
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
  };

  const handleCheckbox2Press = () => {
    setChecked1(false);
    setChecked2(true);
    setChecked3(false);
  };

  const handleCheckbox3Press = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
  };
  
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

  // Address Functions
  function addAddress(idex = -1){
    setIndex(idex);
    setResgister((last) => !last);
  }
  function removeAddress(index){
    let address = donorState.address;
    address.splice(index, 1)
    donorDispach({type: Types.UPDATEADDRESS, payload: address});
    donorDispach({type: Types.UPDATE, data: {...donorState, 'address':address}, dispatch: donorDispach, cb:removeAddressCb});
  }
  function removeAddressCb(status, err){
    if(status){setError(err)};  
      setLoandding(false); 
  }

  return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Endereço</Text>
        </View>
        <View style={styles.containerEdit}>
        {donorState.address.map((address) => {
            return (
              <View style={styles.containerEdit}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    status={checkString.includes(address.title) ? 'checked' : 'unchecked'}
                    onPress={()=>checkBoxString(address.title)}
                    color={'green'}
                    uncheckColor={'red'}
                />
                <Text>{address.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Tipo de material</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1(handleCheckbox1Press);
              }}
              color={'green'}
              uncheckColor={'red'}
          />
          <Text>Metal</Text>
          <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1(handleCheckbox2Press);
              }}
              color={'green'}
              uncheckColor={'red'}
          />
          <Text>Plástico</Text>
          <Checkbox
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1(handleCheckbox3Press);
              }}
              color={'green'}
              uncheckColor={'red'}
          />
          <Text>Eletrônico</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Quantidade</Text>
        </View>
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Peso</Text>
        </View>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          placeholder="Peso estimado"
          placeholderTextColor="#ccc"
        />        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Observações</Text>
        </View>
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
          ()=>addNewDocument("Plástico", caixas, coleta, checkString, observacao, peso, sacolas)
          }>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
  );
}