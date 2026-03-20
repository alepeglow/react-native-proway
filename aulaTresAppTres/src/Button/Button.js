import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from './Button.styles';

export default function Button({text, onPressRecevi}) {
    return (
    <TouchableOpacity style={styles.button} onPress={onPressRecevi}>
        <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>

    )
}