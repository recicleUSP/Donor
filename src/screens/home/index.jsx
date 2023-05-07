import { View, ScrollView, Button, Text, Center, Icon, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ContainerTopClean } from "../../components/containers";
import { ButtonDefaultData} from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import { Size20, Size28 } from "../../constants/scales";
import React from "react";
import { SizedBox } from 'sizedbox';
import { DonorContext } from "../../contexts/donor/context";
import { useContext } from "react";
import { PieChart } from 'react-native-chart-kit';
import { ImageCircleIcon } from "../../components/images";
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Firestore } from "../../firebase/config/connection";

export function Home({}) {
  const navigation = useNavigation();
  const {donorState, donorDispach} = useContext(DonorContext)
  const basedImage                       = require("../../../assets/images/profile.webp");
  const [image, setImage]                = useState(basedImage);

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
      population: 10,
      color: '#297AB1',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Madeira',
      population: 10,
      color: '#F5A623',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Eletrônico',
      population: 10,
      color: '#D33F49',
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

  // const [task, setTask] = useState([])
  // useEffect(()=>{
  //   Firestore.collection("recycling").onSnapshot((query)=>{
  //     const list=[]
  //     query.forEach(()=>{
  //       list.push({...doc.data(), id: doc.id})
  //     })
  //     setTask(list)
  //   })
  // }, [])

  return (
    <ScrollView>
        <ImageCircleIcon
          size={130}
          sizeIcon={0}
          // icon={"camera"}
          align={"flex-start"}
          img={image}
          // fun={changeProfileImage}
          color={Colors[Theme][5]}
          bgColor={Colors[Theme][0]}
        />
       <ContainerTopClean
         fun={()=>{}}
         text={"          Bem vind@,\n"+"          "+donorState.name}
         icon="information"
       />
       <SizedBox vertical={5} />
       {/* <SizedBox ={10} /> */}
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
            <Text style={{ color: Colors[Theme][2], textAlign: 'right', padding: 20, fontWeight: 'bold' }}>0 Coletas Concluídas</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Collection')}>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold' }}>Histórico</Text>
            </View>
            <View style={styles.card}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 30 }}>0KG Papel</Text>
                <Text style={{ marginRight: 30 }}>0KG Plástico</Text>
                <Text>0KG Vidro</Text>
              </View>
              <SizedBox vertical={16} />
                {/* <ImageCircleHome
                  size={50}
                  img={profileDefault}
                /> */}
                {/* <View style={{ flexDirection: 'row', alignItems: 'regth' }}>
                <Text style={{ marginRight: 1 }}>Barcelona, 400, Paraíso</Text> */}
                {/* </View> */}
                <Text>Coleta Concluída</Text>
            </View>
            <SizedBox vertical={5} />
       </ScrollView>
  );
}