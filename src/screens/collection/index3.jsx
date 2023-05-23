import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles, pickerSelectStyles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister3 } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
import { SizedBox } from 'sizedbox';
import { DonorContext } from "../../contexts/donor/context";
import RNPickerSelect from 'react-native-picker-select';

export function Collection3({route}) {
  const {donorState, donorDispach} = useContext(DonorContext)
  const navigation = useNavigation();
  const [observacao, setObservacao2] = useState();
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMoreOneDay, setSelectedMoreOneDay] = useState(null);

  const hours = [
    { label: '7:00', value: '7' },
    { label: '8:00', value: '8' },
    { label: '9:00', value: '9' },
    { label: '10:00', value: '10' },
    { label: '11:00', value: '11' },
    { label: '12:00', value: '12' },
    { label: '13:00', value: '13' },
    { label: '14:00', value: '14' },
    { label: '15:00', value: '15' },
    { label: '16:00', value: '16' },
    { label: '17:00', value: '17' },
    { label: '18:00', value: '18' },
    { label: '8:00 as 10:00', value: 'manhã' },
    { label: '13:00 as 18:00', value: 'tarde' },
    { label: '18:00 as 22:00', value: 'noite' },
  ];

  const days = [
    { label: 'segunda', value: 'segunda' },
    { label: 'terça', value: 'terca' },
    { label: 'quarta', value: 'quarta' },
    { label: 'quinta', value: 'quinta' },
    { label: 'sexta', value: 'sexta' },
    { label: 'sábado', value: 'sábado' },
    { label: 'domingo', value: 'domingo' },
    { label: 'dias úteis', value: 'dias úteis' },
    { label: 'fim de semana', value: 'fim de semana' },
  ];

  const handleHourChange = (value) => {
    setSelectedHour(value);
  };

  const handleDayChange = (value) => {
    setSelectedDay(value);
  };

  const { tipo, endereco, caixas, sacolas, peso } = route.params;

  const nextPage = () => {
    console.log('Navegando para a Página 4');
    navigation.navigate('Collection4', { tipo, endereco, caixas, sacolas, peso, selectedDay, selectedHour, observacao});
  };

  return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister3/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta 3</Text>
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
        <View style={styles.card}>
          <Text style={styles.label2}>Escolha um horário:</Text>
          <RNPickerSelect
            placeholder={{ label: 'Selecione um horário', value: null }}
            items={hours}
            onValueChange={handleHourChange}
            value={selectedHour}
            style={pickerSelectStyles}
          />
          <Text style={styles.selectedHour}>
            Horário selecionado: {selectedHour || 'Nenhum horário selecionado'}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label2}>Escolha um dia:</Text>
          <RNPickerSelect
            placeholder={{ label: 'Selecione um dia', value: null }}
            items={days}
            onValueChange={handleDayChange}
            value={selectedDay}
            style={pickerSelectStyles}
          />
          <Text style={styles.selectedHour}>
            Dia selecionado: {selectedDay || 'Nenhum dia selecionado'}
          </Text>
        </View>
        {/* <View style={styles.containerEdit}>
        {days.map((index) => {
            return (
              <View style={styles.containerEdit}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    onPress={()=>setSelectedMoreOneDay()}
                    color={'green'}
                    uncheckColor={'red'}
                />
                </View>
              </View>
            );
          })}
        </View> */}
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