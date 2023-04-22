import { View, ScrollView, Button, Text, Center, Icon } from "react-native";
import { styles } from "./style";
import { ContainerTopClean } from "../../components/containers";
import { Height, FontBold, Width } from "../../constants/scales";
import { ButtonDefault, ButtonImage } from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import { Size20, Size28 } from "../../constants/scales";
import React from "react";
import { ImageCircle, ImageCircleHome } from "../../components/images";
import { ButtonRoutes } from "../../routes/tab.routes";
import { SizedBox } from 'sizedbox';
import { BarChart } from "react-native-chart-kit";
import { Card } from "../../components/images";
import { DonorContext } from "../../contexts/donor/context";
import { useContext } from "react";

export function Home({ useNavigation }) {
  // const navigation = useNavigation();
  const profileDefault = require("../../../assets/images/profile.webp");
  const {donorState, donorDispach} = useContext(DonorContext)

  const data = {
    labels: ['Vidro', 'Plástico', 'Metal'],
    datasets: [
      {
        data: [35, 45, 38]
      }
    ]
  };

  return (
    <ScrollView>
        <ImageCircleHome
          size={130}
          img={profileDefault}
        />
       <ContainerTopClean
         fun={()=>{}}
         text={"          Bem vind@,\n"+"          "+donorState.name}
         icon="information"
       />
       <SizedBox vertical={5} />
       {/* <SizedBox ={10} /> */}
       <View style={styles.main}>
            <Text style={{ color: 'white', textAlign: 'right', padding: 20, }}>Avaliação</Text>
        </View>
       <SizedBox vertical={2} />
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BarChart
          data={data}
          width={300}
          height={200}
          yAxisSuffix=" kg"
          chartConfig={{
            backgroundColor: 'transparent',
            // backgroundGradientFrom: '#fb8c00',
            // backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 32,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 6,
            },
          }}
        />
        </View>
       <SizedBox vertical={2} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', textAlign: 'right', padding: 20, }}>25 doações</Text>
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
              <Text style={{ color: 'white', textAlign: 'left', padding: 20, }}>Histórico</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', maxWidth: Width * 0.93, maxHeight: Height *0.8, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3 , borderRadius: 10, padding: 20}}>
              <Text>teste</Text>
            </View> 
            <SizedBox vertical={5} />
       </ScrollView>
  );
}
