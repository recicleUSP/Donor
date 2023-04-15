import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import { useContext, useState } from "react";
import { SizedBox } from 'sizedbox';

import { ContainerTop, ContainerData } from "../../components/containers";
import { InputIcon } from "../../components/inputs";
import { DonorContext } from "../../contexts/donor/context"
import { ButtonDefault, ButtonImage } from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import * as Validation from "../../utils/validation";
import * as Types from "../../contexts/donor/types";
import { Size20, Size50, Size16, FontRegular } from "../../constants/scales";
import * as Errors from "../../constants/erros";


export function Login() {

  const {donorState, donorDispach} = useContext(DonorContext)
  const [pass, setPass]            = useState("");
  const [hide, setHide]            = useState(false);
  const navigation                 = useNavigation();

  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr]   = useState("");

  const img = require("../../../assets/images/googleLogo.png");

  function openScreen(){
    navigation.navigate('Sign');
  }

  function validation(){
    let valid = false;

    if(Validation.emailValidation(donorState.email)) {
      setEmailErr(Errors.emailErr);
      valid = true;
    }

    if(Validation.passValidation(pass)) {
      setPassErr(Errors.passErr);
      valid = true;
    }

    return valid;
  }

  function login(){
    if(validation()) return false;

    donorDispach({type: Types.LOGIN, payload: pass, dispatch: donorDispach});
  }

  function loginWithGoogle(){
    donorDispach({type: Types.LOGINGOOGLE, dispatch: donorDispach});
  }

  const handleChange = (value, type) => {
    donorDispach({type: type, payload: value});
  }

  return (
    <ScrollView>
       <ContainerTop/>
       <ContainerData title={"Login"}>

          <InputIcon 
            onChange = {(value) => {handleChange(value, Types.SETEMAIL); setEmailErr("")}}
            value = {donorState.email}
            placeholder = {"Digite seu email"}
            label = "Email"
            icon = "email-outline"
            errorMsg={emailErr}
          />

          <InputIcon 
            onChange = {(value) => {setPass(value); setPassErr("")}}
            value = {pass}
            placeholder = {"Digite sua senha"}
            label = "Senha"
            icon = {hide ? "eye-outline" : "eye-off-outline"}
            errorMsg={passErr}
            btn = {true}
            cb = {setHide}
          />  

          <SizedBox vertical={10} />

          <ButtonDefault
            title={"Entrar"}
            color={Colors[Theme][2]}
            textColor={Colors[Theme][7]}
            textSize={Size20}
            width={0.7}
            fun={login}
          />
          <SizedBox vertical={5} />
          <ButtonDefault
            title={"Cadastrar"}
            color={Colors[Theme][5]}
            textColor={Colors[Theme][7]}
            textSize={Size20}
            width={0.7}
            opacity={0.7}
            fun={openScreen}
          />
          <SizedBox vertical={Size20} />
          <Text style={{marginBottom: Size16, fontSize: Size16, color: Colors[Theme][5], ...FontRegular}}> Ou, fazer login com </Text>
          <ButtonImage 
            imageSrc = {img}
            width={Size50}
            height={Size50}
            fun={loginWithGoogle}
          />
       </ContainerData>
       
    </ScrollView>
  );
}