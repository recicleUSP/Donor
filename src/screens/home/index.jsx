import { View, ScrollView, Button, Text, Center, Icon } from "react-native";
import { styles } from "./style";
import { ContainerTopClean } from "../../components/containers";
import { Height, FontBold, Width } from "../../constants/scales";
import { ButtonDefault, ButtonImage } from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import { Size20, Size28 } from "../../constants/scales";
import React from "react";
import { ImageCircle, ImageCircleHome } from "../../components/images";
import { SizedBox } from 'sizedbox';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Card } from "../../components/images";
import { DonorContext } from "../../contexts/donor/context";
import { useContext } from "react";
import { PieChart } from 'react-native-chart-kit';
import { ImageCircleIcon } from "../../components/images";
import {useState, useEffect} from 'react';

export function Home({ useNavigation }) {
  const {donorState, donorDispach} = useContext(DonorContext)
  const basedImage                       = require("../../../assets/images/profile.webp");
  const [image, setImage]                = useState(basedImage);

  useEffect(()=>{
    setImage(donorState.photoUrl 
      ? {uri: donorState.photoUrl} 
      : basedImage);
  },[donorState.photoUrl]);
  
  // Image Profile functions
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
      population: 21500000,
      color: '#297AB1',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Orgânico',
      population: 2800000,
      color: '#63BFA3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Madeira',
      population: 527612,
      color: '#F5A623',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Eletrônico',
      population: 8538000,
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


  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      },
    ],
  };

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
            <Text style={{ color: Colors[Theme][2], textAlign: 'right', padding: 20, fontWeight: 'bold' }}>25 Coletas Concluídas</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ButtonDefault
              title={"Doação"}
              color={Colors[Theme][2]}
              textColor={Colors[Theme][7]}
              textSize={Size20}
              width={0.9}
              // fun={login}
            />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold' }}>Histórico</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ maxWidth: Width * 0.93, maxHeight: Height * 0.8, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3, borderRadius: 10, padding: 20, alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 30 }}>2KG Papel</Text>
                <Text style={{ marginRight: 30 }}>1KG Plástico</Text>
                <Text>2KG Vidro</Text>
                
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
            </View>
            
            <SizedBox vertical={5} />
       </ScrollView>
  );
}
