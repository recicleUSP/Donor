import { Text, TouchableOpacity, View, Image } from "react-native";
import { Width, FontSemibold} from "../constants/scales";
import { SimpleIcon } from "./icons";

const ButtonDefault = ({
    title,          // Titulo do button
    color,          // Cor principal do button
    textColor,      // Cor do Text
    textSize,       // Tamanho do Texto
    width,          // Largura do button 0-1
    padding = 12,   // Padding padrão entre os textos 
    opacity = 1,    // Define a opacidade do button
    fun = null      // Função que será executada a cada click
}) => {
    return (
        <TouchableOpacity onPress={fun}>
            <View  style={{backgroundColor: color, opacity: opacity, width: Width*width, alignItems:"center", padding: padding}}>
                <Text style={{color: textColor, fontSize: textSize, ...FontSemibold}}>{title}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const ButtonImage = ({
    imageSrc,            // SRC da imagem capturado pelo required
    height = 45,         // Altura da imagem
    width = 45,          // Largura da imagem
    fun = null           // Função que será executada a cada click
}) => {
      
    return (
        <TouchableOpacity onPress={fun}>
            <Image style={{width: width, height:height}}  source={imageSrc} alt="Recicle++" />
        </TouchableOpacity> 
    );
}


const ButtonIcon = ({
    btn = false,    // Define se o botão do icone estará ativo ou não
    fun = null,     // Função que será executada a cada click no botão
    name,           // Nome do icone a ser inserido
    color,          // Cor que o icone terá
    size = 25,      // Tamanho do icone
    margin = 0      // Margem que o icone terá
}) => {

    return (
        
        <TouchableOpacity onPress={fun} disabled = {!btn} >
            <SimpleIcon name={name} size={size} color={color} margin={margin}/>
        </TouchableOpacity>        
    );
}

export {ButtonDefault, ButtonIcon, ButtonImage};
