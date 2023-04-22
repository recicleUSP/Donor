import { View, ScrollView, Button, Text, Center } from "react-native";
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

export function Home({ useNavigation }) {
  // const navigation = useNavigation();
  const profileDefault = require("../../../assets/images/profile.webp");

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
         text="Bem vindo!"
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
        <View style={styles.container}>
        <Button
          title={"Cadastrar"}
          color={Colors[Theme][2]}
          textColor={Colors[Theme][7]}
          textSize={Size28}
          width={0.9}
          // onPress={ () => navigation.navigate("")}
        />
        </View>      
        {/* <Card/> */}
       </ScrollView>
  );
}
