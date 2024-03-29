import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { Height, Size20, Width } from "../../constants/scales";
import { Colors, Theme } from "../../constants/setting";
import { ButtonDefault } from "../../components/buttons";
import { TitleColorSmall } from "../../components/titles";
import { SizedBox } from "sizedbox";
import { InputIcon, InputIconMask } from "../../components/inputs";
import * as Mask from "../../utils/marksFormat";
import { cepValidation } from "../../utils/validation";
import { DonorContext } from "../../contexts/donor/context";
import { useEffect, useState, useContext } from "react";
import { Loading } from "../../components/loading";
import { Error } from "../../components/error";
import { UPDATEADDRESS, UPDATE } from "../../contexts/donor/types";
import { ADDRESS_GEO_KEY } from "../../constants/addressGeo";


export const RegisterAddress = ({data, dispach, closeFunc, idx = -1}) => {

    //const {data, dispach}                   = useContext(DonorContext);

    const [title, setTitle]                 = useState("");
    const [cep, setCep]                     = useState("");
    const [street, setStreet]               = useState("");
    const [num, setNum]                     = useState("");
    const [city, setCity]                   = useState("");
    const [state, setState]                 = useState("");
    const [neighborhood, setNeighborhood]   = useState("");
    const [complement, setComplement]       = useState("");

    let latitud = '';
    let longitud = '';

    const [head, setHead]                   = useState("Cadastro de Endereço")
    const [error, setError]                 = useState(false);
    const [loandding, setLoandding]         = useState(false);

    const [titleErr, setTitleErr]           = useState("");
    const [cepErr, setCepErr]               = useState("");
    const [streetErr, setStreetErr]         = useState("");
    const [numErr, setNumErr]               = useState("");
    const [cityErr, setCityErr]             = useState("");
    const [stateErr, setStateErr]           = useState("");

    useEffect(()=>{
        if(idx >= 0){
            setTitle(data.address[idx].title)
            setCep(data.address[idx].cep)
            setStreet(data.address[idx].street)
            setNum(data.address[idx].num)
            setNeighborhood(data.address[idx].neighborhood)
            setCity(data.address[idx].city)
            setState(data.address[idx].state)
            setComplement(data.address[idx].complement)
            setHead("Edição de Endereço")
        }
    },[]);

    async function validation(){
        let res = true;
        const phase = "Campo Obrigatório"

        if(title  == ''){setTitleErr(phase);res = false;}
        if(street == ''){setStreetErr(phase); res = false;}
        if(num    == ''){setNumErr(phase); res = false;}
        if(state  == ''){setStateErr(phase); res = false;}
        if(city   == ''){setCityErr(phase); res = false;}
        if(cepValidation(cep)) {setCepErr("Cep inválido"); res = false;}

        res = res && await getGeoLocation();
        return res;
    }

    async function confimPressed(){
        setLoandding(true);
        if(await validation()){
            let address = data.address;

            const newAddress = {
                'title' : title.trim(),
                'cep' : cep.trim(),
                'num' : num.trim(),
                'street' : street.trim(),
                'state' : state.trim(), 
                'city' : city.trim(),
                'neighborhood': neighborhood.trim(),
                'complement' : complement.trim(),
                'latitude' : latitud.trim(),
                'longitude' : longitud.trim()
            }

            if(idx >= 0){
                address[idx] = newAddress
            }else{
                address.push(newAddress);
            }

            dispach({type: UPDATEADDRESS, payload: address})
            dispach({type: UPDATE, data: {...data, 'address':address}, dispatch: dispach, cb:updateCB});
            closeFunc();
        }
        setLoandding(false);
    }
    function updateCB(status, err){
        if(status){setError(err)};  
        setLoandding(false); 
    }
    function apiCep(){
        const nCep = cep.replace(/[^0-9]/gi, "");
        return `https://viacep.com.br/ws/${nCep}/json/`;
    }
    function getCepInf(){
        fetch(apiCep())
            .then((responseObj) => {
            responseObj.json()
                .then((data) => {
                    if(!data.erro){
                        setNeighborhood(data.bairro);
                        setCity(data.localidade);
                        setStreet(data.logradouro. substring(3));
                        setState(data.uf);
                    }
                });
        });
    }

    function apiGeoLocation(){
        const nCep = cep.replace(/[^0-9]/gi, "");
        const address = `${street},${num},${neighborhood},${city},${state},${nCep}`;
        
        return `https://dev.virtualearth.net/REST/v1/Locations?q=${address}&output=json&key=${ADDRESS_GEO_KEY}`;
        //return `https://platform.bing.com/geo/spatial/v1/public/Geodata?SpatialFilter=GetBoundary('${address}',1,'CountryRegion',1,1,'pt','br')&$format=json&key=${ADDRESS_GEO_KEY}`;
    }
    async function getGeoLocation(){
        try{
            let responseObj = await fetch(apiGeoLocation());
            let data = await responseObj.json();
            if(!data.erro){
                // console.log("Geolocation Data: ",data);
                // console.log("Geolocation Results: ",data["resourceSets"][0]["resources"][0]["point"]["coordinates"]);
                const geoLoc = data["resourceSets"][0]["resources"][0]["point"]["coordinates"];
                latitud =`${geoLoc[0]}`;
                longitud = `${geoLoc[1]}`;
                return true;
            }
            setError("Erro ao buscar Geolocalização. Endereço não encontrado, verifique os dados digitados e tente novamente.");
            return false;
        }catch(err){
            //console.log("Erro Geolocation: ",err);
            setError(err)
            return false;
        }
    }

    return(
        <View style={Style.default}>
            {loandding && <Loading/>}
            {error && <Error error={error} closeFunc={()=>setError(false)}/>}

            <TouchableOpacity style={{...Style.default, ...Style.container}} onPress={closeFunc}></TouchableOpacity>
            <View style={Style.subcontainer}>
                <ScrollView>

                    <TitleColorSmall align={"center"} content={head}/>
                    <SizedBox vertical={5}/>

                    <InputIcon 
                        onChange = {(value) => {setTitle(value), setTitleErr("")}}
                        value = {title}
                        placeholder = {"Digite o título"}
                        label = "Titulo *"
                        flexS={0.78}
                        errorMsg={titleErr}
                    />

                    <View style={Style.row}>
                        <InputIconMask 
                            onChange = {(value) => {setCep(value); setCepErr('')}}
                            value = {cep}
                            placeholder = {"Digite o CEP"}
                            keyboardType={"number-pad"}
                            label = "CEP *"
                            mask={Mask.cepMask}
                            flexS={0.4}
                            errorMsg={cepErr}
                            onBlur={getCepInf}
                        />
                        <InputIcon 
                            onChange = {(value) => {setNum(value);setNumErr('')}}
                            value = {num}
                            placeholder = {"Digite o Nº"}
                            keyboardType={"number-pad"}
                            label = "Nº Endereço *"
                            flexS={0.35}
                            errorMsg={numErr}
                        />
                    </View>

                    <InputIcon 
                        onChange = {(value) => {setStreet(value); setStreetErr('')}}
                        value = {street}
                        placeholder = {"Digite o nome da rua"}
                        label = "Rua *"
                        flexS={0.78}
                        errorMsg={streetErr}
                    />

                    <View style={Style.row}>
                        <InputIcon 
                            onChange = {(value) => {setState(value); setStateErr('')}}
                            value = {state}
                            placeholder = {"Nome do estado"}
                            label = "Estado *"
                            flexS={0.375}
                            errorMsg={stateErr}
                        />
                        <InputIcon 
                            onChange = {(value) => {setCity(value); setCityErr('')}}
                            value = {city}
                            placeholder = {"Nome da cidade"}
                            label = "Cidade *"
                            flexS={0.375}
                            errorMsg={cityErr}
                        />
                    </View>

                    <View style={Style.row}>
                       <InputIcon 
                            onChange = {setNeighborhood}
                            value = {neighborhood}
                            placeholder = {"Nome do bairro"}
                            label = "Bairro"
                            flexS={0.375}
                        />
                         <InputIcon 
                            onChange = {setComplement}
                            value = {complement}
                            placeholder = {"Ex: Ap. 621, Fundo."}
                            label = "Complemento"
                            flexS={0.375}
                        />
                    </View>

                    <SizedBox vertical={5}/>
                    <View style={Style.row}>
                        <ButtonDefault
                            title={"Cancelar"}
                            padding={5}
                            width={0.35}
                            color={Colors[Theme][8]}
                            textColor={Colors[Theme][1]}
                            radius={16}
                            textSize={Size20*0.9}
                            fun={closeFunc}
                        />
                        <ButtonDefault
                            title={"Confirmar"}
                            padding={5}
                            width={0.35}
                            color={Colors[Theme][2]}
                            textColor={Colors[Theme][1]}
                            radius={16}
                            textSize={Size20*0.9}
                            fun={confimPressed}
                        />
                    </View>
                </ScrollView>
                
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    default: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        elevation: 1,
        zIndex: 1,
        justifyContent: "center"
    },

    row:{
        width: Width*0.9-45,
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between",        
    },

    container:{  
        backgroundColor: Colors[Theme][4],
        opacity: 0.3,
        alignItems:"center",
    },
    
    subcontainer:{
        position: "absolute",
        elevation: 1,
        zIndex: 1,
        width: Width*0.9,
        maxHeight: Height*0.85,
        //height: Height * 0.4,
        backgroundColor: Colors[Theme][1],
        alignSelf: "center",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
})