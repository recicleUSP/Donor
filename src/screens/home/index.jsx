import { View, ScrollView } from "react-native";
import { styles } from "./style";

import { ContainerTopClean } from "../../components/containers";

import { ButtonDefault, ButtonImage } from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import { Size20 } from "../../constants/scales";
import React from "react";


export function Home() {

  // const img = require("C:\Users\leoca\projeto-usp-w-versao\Donor\assets\images\logo.png");

  return (
    <ScrollView>
       <ContainerTopClean
         fun={()=>{}}
         text="Bem Vindo Gabriel Gostoso!"
         icon="information"
       />
       {/* <ContainerData title={"Foto"}> */}
        <View style={styles.container}>
          <View style={styles.main}>
            {/* <Text style={styles.title}>Home</Text> */}

          </View>
          {/* <CircleImage uri={ img } size={ 35 }/> */}


          <ButtonDefault
            title={"Cadastrar"}
            color={Colors[Theme][2]}
            textColor={Colors[Theme][7]}
            textSize={Size20}
            width={0.7}
          />
        </View>       
       </ScrollView>
  );
}
