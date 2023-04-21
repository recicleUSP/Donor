import { useNavigation } from "@react-navigation/native";
import { Text, View, Button, ScrollView } from "react-native";
import { styles } from "./style";
import { SizedBox } from 'sizedbox';

import CircleImage, { ContainerTop, ContainerData, ContainerTopNormal } from "../../components/containers";
import { InputIcon } from "../../components/inputs";
import { DonorContext } from "../../contexts/donor/context"
import { ButtonDefault, ButtonImage } from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import * as Validation from "../../utils/validation";
import * as Types from "../../contexts/donor/types";
import { Size20, Size50, Size16, FontRegular } from "../../constants/scales";
import * as Errors from "../../constants/erros";
import React from "react";


export function Home() {

  function openScreen(){
    const navigation = useNavigation();
    navigation.navigate('Sign' as never);
  }

  // const img = require("C:\Users\leoca\projeto-usp-w-versao\Donor\assets\images\logo.png");

  return (
    <ScrollView>
       <ContainerTopNormal/>
       {/* <ContainerData title={"Foto"}> */}
        <View style={styles.container}>
          <View style={styles.main}>
            {/* <Text style={styles.title}>Home</Text> */}

          </View>
          {/* <CircleImage uri={ img } size={ 35 }/> */}

          <SizedBox vertical={10} />
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
