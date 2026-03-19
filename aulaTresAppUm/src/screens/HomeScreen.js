import { Button, Text } from "react-native";
import { View } from "react-native";

export default function  HomeScreen(){
    return (
        <View>
            <Text>Home</Text>

            <View>
                <Button
                    title="Ir para Detalhes"
                    onPress={() => alert("Detalhes...")}
                />
            </View>
        </View>
    )
}