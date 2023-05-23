import { View, ScrollView, Button, Text, Center, Icon, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ContainerTopClean } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext } from "react";import messaging from '@react-native-firebase/messaging';
import { Size50, Width } from "../../constants/scales";
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
import { SizedBox } from 'sizedbox';
import { DonorContext } from "../../contexts/donor/context";
import { PieChart } from 'react-native-chart-kit';
import { ImageCircleIcon } from "../../components/images";
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { setDoc, getDoc, collection, onSnapshot , addDoc, getFirestore, firebaseApp, Firestore } from "firebase/firestore";
import { CardHome } from "../address/components/card";

export function Home({}) {
  const navigation = useNavigation();
  const firestore = getFirestore(firebaseApp);
  const {donorState, donorDispach} = useContext(DonorContext)
  const basedImage                       = require("../../../assets/images/profile.webp");
  const [image, setImage]                = useState(basedImage);
  const [tarefas, setTarefas]            = useState([]);
  const quantidadeTarefas = tarefas.length;
  const tipos = tarefas.map((tarefa) => tarefa.tipo);
  const quantidadeTipoA = tipos.filter((tipo) => tipo === 'Plástico').length;
  const quantidadeTipoB = tipos.filter((tipo) => tipo === 'Metal').length;
  const quantidadeTipoC = tipos.filter((tipo) => tipo === 'Eletrônico').length;
  const quantidadeTipoD = tipos.filter((tipo) => tipo === 'Papel').length;
  const quantidadeTipoE = tipos.filter((tipo) => tipo === 'Óleo').length;
  const quantidadeTipoF = tipos.filter((tipo) => tipo === 'Vidro').length;

  useEffect(()=>{
    setImage(donorState.photoUrl 
      ? {uri: donorState.photoUrl} 
      : basedImage);
  },[donorState.photoUrl]);
  
  async function changeProfileImage(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });  

    if (!result.canceled) {
      const source = {uri: result.assets[0].uri}
      setImage(source);
      setLoandding(true);
      donorDispach({type: Types.LOADIMAGE, uri: source.uri, cb: changeImageCB})
    }
  }
  function changeImageCB (state, error) {
    if(state){
      setError(error);
    }else {
      donorDispach({type:Types.SETIMAGE, payload: error})
      donorDispach({type: Types.UPDATE, data: {...donorState, photoUrl: error}, dispatch: donorDispach, cb:updateCB});
    }
  }

  const data2 = [
    {
      name: 'Metal',
      population: quantidadeTipoB,
      color: '#297AB1',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Plástico',
      population: quantidadeTipoA,
      color: '#F5A623',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Eletrônico',
      population: quantidadeTipoC,
      color: '#D33F49',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Óleo',
      population: quantidadeTipoE,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Vidro',
      population: quantidadeTipoF,
      color: 'pink',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Papel',
      population: quantidadeTipoD,
      color: 'brown',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'recycling'), (querySnapshot) => {
      const tarefas = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        tarefas.push({
          id: doc.id,
          tipo: data.tipo,
          caixas: data.caixas,
          coleta: data.coleta,
          endereco: data.endereco,
          observacao: data.observacao,
          peso: data.data,
          sacolas: data.sacolas,
        });
      });
      setTarefas(tarefas);
    });
    return () => unsubscribe();
  }, []);  

  return (
    <ScrollView>
        <ImageCircleIcon
          size={130}
          sizeIcon={0}
          align={"flex-start"}
          img={image}
          color={Colors[Theme][5]}
          bgColor={Colors[Theme][0]}
        />
       <ContainerTopClean
         fun={()=>{}}
         text={"          Bem vind@,\n"+"          "+donorState.name}
         icon="information"
       />
       <SizedBox vertical={5} />
       <View style={styles.main}>
            <Text style={{ color: Colors[Theme][2], textAlign: 'right', padding: 20, fontWeight: 'bold' }}>Avaliação</Text>
        </View>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View>
      <PieChart
        data={data2}
        width={350}
        height={250}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="20"
        center={[10, 0]}
        hasLegend={true}
      />
    </View>
        </View>
       <SizedBox vertical={2} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors[Theme][2], textAlign: 'right', padding: 20, fontWeight: 'bold' }}>{quantidadeTarefas+" Coletas Concluídas"}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Collection')}>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold' }}>Histórico</Text>
            </View>
            <ScrollView horizontal>
              {tarefas.map((index) => (
                <View style={[styles.containerEdit, { marginRight: 50 }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CardHome tipo={index.tipo} endereco={index.endereco} sacolas={index.sacolas} caixas={index.caixas} key={index} />
                  </View>
                </View>
              ))}
            </ScrollView>
            <SizedBox vertical={5} />
       </ScrollView>
  );
}