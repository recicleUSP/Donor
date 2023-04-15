import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import { SizedBox } from 'sizedbox';

import { ContainerTop, ContainerData } from "../../components/containers";
import { InputIcon,InputIconMask } from "../../components/inputs";
import { ButtonDefault } from "../../components/buttons";
import { Colors,Theme } from "../../constants/setting";
import { Size20 } from "../../constants/scales";
import { DonorContext } from "../../contexts/donor/context"
import * as Types from "../../contexts/donor/types";
import * as Errors from "../../constants/erros";
import * as Validation from "../../utils/validation";
import * as Mask from "../../utils/marksFormat";


export function Sign() {

  const {donorState, donorDispach} = useContext(DonorContext)
  const [pass, setPass]            = useState("");
  const [hide, setHide]            = useState(false);

  const [nameErr, setNameErr]   = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [passErr, setPassErr]   = useState("");

  function validation(){
    let valid = false;

   
    if(Validation.nameValidation(donorState.name)) {
      setNameErr(Errors.nameErr);
      valid = true;
    }

    if(Validation.emailValidation(donorState.email)) {
      setEmailErr(Errors.emailErr);
      valid = true;
    }

    if(Validation.phoneValidation(donorState.phone)) {
      setPhoneErr(Errors.phoneErr);
      valid = true;
    }

    if(Validation.passValidation(pass)) {
      setPassErr(Errors.passErr);
      valid = true;
    }

    return valid;
  }

  function sign(){
    if(validation()) return false;

    donorDispach({type: Types.SIGN, payload: pass, dispatch: donorDispach});
  }

  const handleChange = (value, type) => {
    donorDispach({type: type, payload: value});
  }

  return (
    <ScrollView>
       <ContainerTop/>
       <ContainerData title={"Cadastro"}>
          <InputIcon 
            onChange = {(value) => {handleChange(value, Types.SETNAME); setNameErr("")}}
            value = {donorState.name}
            placeholder = {"Digite seu nome"}
            label = "Nome"
            icon = "account"
            errorMsg={nameErr}
          />

          <InputIconMask 
            onChange = {(value) => {handleChange(value, Types.SETPHONE); setPhoneErr("")}}
            value = {donorState.phone}
            placeholder = {"Digite seu contato"}
            keyboardType={"number-pad"}
            label = "Contato"
            icon = "cellphone"
            mask={Mask.phoneMask}
            errorMsg={phoneErr}
          />

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
            msg="Caracteres: maiúsculos, minusculos, especiais e numericos são necessários"
            icon = {hide ? "eye-outline" : "eye-off-outline"}
            errorMsg={passErr}
            btn = {true}
            cb = {setHide}
          />  

          <SizedBox vertical={10} />

          <ButtonDefault
            title={"Cadastrar"}
            color={Colors[Theme][2]}
            textColor={Colors[Theme][7]}
            textSize={Size20}
            width={0.7}
            fun={sign}
          />
          
       </ContainerData>
       
    </ScrollView>
  );
}
