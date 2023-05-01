import { View, Text, StyleSheet } from "react-native";
import { Colors, Theme } from "../../../constants/setting";
import { Width, Height, Size20, FontBold, FontRegular } from "../../../constants/scales";
import { ButtonIcon } from "../../../components/buttons";
import { TextIcon, TextSimple } from "../../../components/texts";

export const AddressCard = ({address, editFn, removeFn}) => {

    return (
        <View style={Style.container}>
            <View style={Style.row}>
                <ButtonIcon 
                    btn = {true}
                    name={"minus"}
                    color={Colors[Theme][5]}
                    margin={0}
                    size={Size20*1.4}
                    fun={removeFn}
                    alignSelf="flex-start"
                />
                <Text style={Style.textTitle}>{address.title}</Text>
                <ButtonIcon 
                    btn = {true}
                    name={"pencil"}
                    color={Colors[Theme][5]}
                    margin={0}
                    size={Size20*1.2}
                    fun={editFn}
                    alignSelf="flex-start"
                />
            </View>

           
            <TextIcon
                icon={"map-marker"}
                color={Colors[Theme][4]}
                size={Size20*0.8}
                space={15}
            >
                {address.cep}.
            </TextIcon>
            <TextIcon
                icon={"sign-direction"}
                color={Colors[Theme][4]}
                size={Size20*0.8}
                space={15}
            >
                {address.city}, {address.state}.
            </TextIcon>
            <TextIcon
                icon={"home"}
                color={Colors[Theme][4]}
                size={Size20*0.8}
                space={15}
            >
                {address.street}, {address.num} {address.complement}.
            </TextIcon>
        </View>
    );
}

const Style = StyleSheet.create({
    row:{
        display: "flex",
        flexDirection:"row",        
        justifyContent:"space-between",        
    },

    textTitle : {
        marginBottom: 15,
        color: Colors[Theme][5],
        fontSize: Size20 * 0.85,
        ...FontBold
    },

    textContent : {

    },

    container:{  
        elevation: 3,
        zIndex: 1,
        justifyContent: "center",
        width: Width * 0.85,
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors[Theme][1],
        //alignItems:"center",
        marginBottom: 15
    },
})