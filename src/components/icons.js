import { MaterialCommunityIcons } from "@expo/vector-icons";

export const SimpleIcon = ({name, color, size = 20, margin = 0}) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} style={{margin}} />;
}