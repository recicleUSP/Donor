import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles, pickerSelectStyles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
import { SizedBox } from 'sizedbox';
import { Checkbox } from 'react-native-paper';
import { DonorContext } from "../../contexts/donor/context";
import RNPickerSelect from 'react-native-picker-select';

export function Collection({router}) {
  const navigation = useNavigation();
  const [checkString, setCheckedString] = useState([]);
  const [checkTipo, setCheckedTipo] = useState(null);
  const {donorState, donorDispach} = useContext(DonorContext)

  const itens = [
    { label: 'Plástico', value: 'Plástico' },
    { label: 'Metal', value: 'Metal' },
    { label: 'Papel', value: 'Papel' },
    { label: 'Eletrônico', value: 'Eletrônico' },
    { label: 'Óleo', value: 'Óleo' },
    { label: 'Vidro', value: 'Vidro' },
  ];

  const handleTipoChange = (value) => {
    setCheckedTipo(value);
  };

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

  const checkBoxTipo = (itens) => {
    if(checkTipo.includes(itens)){
      const index = checkTipo.indexOf(itens);
      if(index != -1){
        const updatedItens = [...checkTipo];
        updatedItens.splice(index, 1);
        setCheckedTipo(updatedItens);
      }
    } else{setCheckedTipo([...checkTipo,itens])}
  }

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

  const nextPage = () => {
    console.log('Navegando para a Página 2');
    navigation.navigate('Collection2', { tipo: checkTipo, endereco: checkString});
  };

  return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta 1</Text>
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
        <View style={styles.card}>
          <Text style={styles.label2}>Escolha um Material:</Text>
          <RNPickerSelect
            placeholder={{ label: 'Selecione um material', value: null }}
            items={itens}
            onValueChange={handleTipoChange}
            value={checkTipo}
            style={pickerSelectStyles}
          />
          <Text style={styles.selectedHour}>
            Material selecionado: {checkTipo || 'Nenhum material selecionado'}
          </Text>
        </View>
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