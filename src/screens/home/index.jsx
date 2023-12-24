import { View, ScrollView, Button, Text, Center, Icon, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { ContainerTopClean } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
//import messaging from '@react-native-firebase/messaging';
// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }
import { SizedBox } from 'sizedbox';
import { DonorContext } from "../../contexts/donor/context";
import { ImageCircleIcon } from "../../components/images";
import { useNavigation } from '@react-navigation/native';
import { getFirestore, firebaseApp } from "firebase/firestore";
import { CardHome } from "../address/components/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDatabase, ref, get } from "firebase/database";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function Home({}) {
  const navigation = useNavigation();
  const firestore = getFirestore(firebaseApp);
  const {donorState, donorDispach} = useContext(DonorContext)
  const basedImage                       = require("../../../assets/images/profile.webp");
  const [image, setImage]                = useState(basedImage);
  const [tarefas, setTarefas]            = useState([]);
  const quantidadeTarefas = tarefas.length;
  const tipos = tarefas.map((tarefa) => tarefa.tipo);

  const tokenizeString=(string) => {
    const tokens = String(string).replace(/([a-z])([A-Z])/g, '$1,$2').split(',');
    return tokens;
  }

  const database = getDatabase(firebaseApp);
  const [donorData, setdonorData] = useState([]);
  const yourdonorId = donorState.id;

  useEffect(() => {
    const infoRef = ref(database, 'recyclable/');
  
    get(infoRef).then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const donorArray = [];
        for (const id in data) {
          const donorInfo = data[id];
          if (donorInfo && donorInfo.donor && donorInfo.donor.id === yourdonorId) {
            const donor = donorInfo.donor;
            const donorData = {
              id: donor.id,
              name: donor.name,
              photoUrl: donor.photoUrl,
              address: donorInfo.address,
              bags: donorInfo.bags,
              boxes: donorInfo.boxes,
              collector: {
                id: donorInfo.collector.id,
                name: donorInfo.collector.name,
                photoUrl: donorInfo.collector.photoUrl
              },
              observation: donorInfo.observation,
              status: donorInfo.status,
              times: donorInfo.times,
              types: donorInfo.types,
              weekDays: donorInfo.weekDays,
              weight: donorInfo.weight
            };
            donorArray.push(donorData);
          }
        }
        setdonorData(donorArray);
      }
    })
    .catch(error => {
      console.error('Erro ao ler os dados:', error);
    });
  }, [yourdonorId]);

  // const quantidadetypesA = collectorData.filter((tarefa) => tarefa.types.includes('Plástico')).length;
  // const quantidadetypesB = collectorData.filter((tarefa) => tarefa.types.includes('Metal')).length;
  // const quantidadetypesC = collectorData.filter((tarefa) => tarefa.types.includes('Eletrônico')).length;
  // const quantidadetypesD = collectorData.filter((tarefa) => tarefa.types.includes('Papel')).length;
  // const quantidadetypesE = collectorData.filter((tarefa) => tarefa.types.includes('Óleo')).length;
  // const quantidadetypesF = collectorData.filter((tarefa) => tarefa.types.includes('Vidro')).length;

  const quantidadetypesA = 50; 
  const quantidadetypesB = 30;
  const quantidadetypesC = 70;
  const quantidadetypesD = 40;
  const quantidadetypesE = 20;
  const quantidadetypesF = 60;

  // Encontrando o maior valor para normalização
  const max = Math.max(
    quantidadetypesA,
    quantidadetypesB,
    quantidadetypesC,
    quantidadetypesD,
    quantidadetypesE,
    quantidadetypesF
  );

  // Normalizando os valores para calcular as alturas das barras
  const normalizedA = (quantidadetypesA / max) * 100;
  const normalizedB = (quantidadetypesB / max) * 100;
  const normalizedC = (quantidadetypesC / max) * 100;
  const normalizedD = (quantidadetypesD / max) * 100;
  const normalizedE = (quantidadetypesE / max) * 100;
  const normalizedF = (quantidadetypesF / max) * 100;

  const barData = [
    { height: normalizedA, value: quantidadetypesA, color: Colors[Theme][2], label: 'Plástico' },
    { height: normalizedB, value: quantidadetypesB, color: Colors[Theme][2], label: 'Metal' },
    { height: normalizedC, value: quantidadetypesC, color: Colors[Theme][2], label: 'Eletrônico' },
    { height: normalizedD, value: quantidadetypesD, color: Colors[Theme][2], label: 'Papel' },
    { height: normalizedE, value: quantidadetypesE, color: Colors[Theme][2], label: 'Óleo' },
    { height: normalizedF, value: quantidadetypesF, color: Colors[Theme][2], label: 'Vidro' },
  ];

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    <TouchableOpacity style={styles.card}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 }}>
          <View style={styles.barContainer}>
            {barData.map((bar, index) => (
              <View key={index} style={styles.bar}>
                <View style={[styles.barFill, { height: bar.height, backgroundColor: bar.color }]}>
                  <Text style={styles.barText}>{bar.value}</Text>
                </View>
                <Text style={styles.legend}>{bar.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
    </View>
        </View>
       <SizedBox vertical={2} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors[Theme][2], textAlign: 'right', padding: 20, fontWeight: 'bold' }}>{quantidadeTarefas+" Coletas Concluídas"}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Collection')}>
          <MaterialCommunityIcons name="recycle" size={28} color="white" />
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold' }}>Histórico</Text>
            </View>
            <ScrollView horizontal>
            {donorData.map((item, index) => (
              <View style={[styles.containerEdit, { marginRight: 50 }]} key={index}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CardHome
                    tipo={item.type}
                    endereco={item.address.name}
                    peso={item.weight}
                    sacolas={item.bags}
                    caixas={item.boxes}
                    foto={item.collector.photoUrl}
                    nome={item.collector.name}
                    id={item.collector.id}
                  />
                </View>
              </View>
            ))}
            </ScrollView>
            <SizedBox vertical={5} />
       </ScrollView>
    </GestureHandlerRootView>

  );
}