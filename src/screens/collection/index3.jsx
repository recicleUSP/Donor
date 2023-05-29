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
import { Checkbox } from "react-native-paper";

export function Collection3({route}) {
  const {donorState, donorDispach} = useContext(DonorContext)
  const navigation = useNavigation();
  const [observacao, setObservacao2] = useState();
  const [checkedItemsHours, setCheckedItemsHours] = useState([]);
  const [checkedItemsDays, setCheckedItemsDays] = useState([]);

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
  ];

  const days = [
    { label: 'segunda', value: 'segunda' },
    { label: 'terça', value: 'terca' },
    { label: 'quarta', value: 'quarta' },
    { label: 'quinta', value: 'quinta' },
    { label: 'sexta', value: 'sexta' },
    { label: 'sábado', value: 'sábado' },
    { label: 'domingo', value: 'domingo' },
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
    navigation.navigate('Collection4', { tipo, endereco, caixas, sacolas, peso, setCheckedItemsDays, setCheckedItemsHours, observacao});
  };

  const handleCheckboxChangeHours = (value) => {
    const isChecked = checkedItemsHours.includes(value);
    if (isChecked) {
      setCheckedItemsHours(checkedItemsHours.filter((item) => item !== value));
    } else {
      setCheckedItemsHours([...checkedItemsHours, value]);
    }
  };

  const handleCheckboxChangeDays = (value) => {
    const isChecked = checkedItemsDays.includes(value);
    if (isChecked) {
      setCheckedItemsDays(checkedItemsDays.filter((item) => item !== value));
    } else {
      setCheckedItemsDays([...checkedItemsDays, value]);
    }
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontSize: 15 }}>Melhores dias</Text>
        </View>
        {days.map((item) => (
          <View
            key={item.value}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Checkbox
              value={checkedItemsDays.includes(item.value)}
              onValueChange={() => handleCheckboxChangeDays(item.value)}
              status={checkedItemsDays.includes(item.value) ? 'checked' : 'unchecked'}
              onPress={()=>handleCheckboxChangeDays(item.value)}
              color={'green'}
              uncheckColor={'red'}
            />
            <Text
              style={{
                marginLeft: 8,
                color: checkedItemsDays.includes(item.value) ? 'green' : 'black',
                fontWeight: checkedItemsDays.includes(item.value) ? 'bold' : 'normal',
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontSize: 15 }}>Melhores horários</Text>
        </View>
          {hours.map((item) => (
          <View
            key={item.value}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Checkbox
              value={checkedItemsHours.includes(item.value)}
              onValueChange={() => handleCheckboxChangeHours(item.value)}
              status={checkedItemsHours.includes(item.value) ? 'checked' : 'unchecked'}
              onPress={()=>handleCheckboxChangeHours(item.value)}
              color={'green'}
              uncheckColor={'red'}
            />
            <Text
              style={{
                marginLeft: 8,
                color: checkedItemsHours.includes(item.value) ? 'green' : 'black',
                fontWeight: checkedItemsHours.includes(item.value) ? 'bold' : 'normal',
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
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