import { TouchableOpacity, View } from "react-native";
import { SimpleIcon } from "../../../components/icons";

export const ButtonOval = ({
    size = 20,
    color,
    icon, 
    func
}) => {
    return (
        <TouchableOpacity onPress={func}>
            <View style={{
                borderColor: color, 
                borderRadius: 100, 
                borderWidth:2, 
                height: size*1.3 + 20,
                alignItems:"center",
                justifyContent: "center",
                padding:10
            }}>
                <SimpleIcon
                    name={icon}
                    color={color}
                    size={size}
                />
            </View>
        </TouchableOpacity>
    );
}

