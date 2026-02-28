import { useEffect } from "react";
import { View, Text } from "react-native";

export function EffectMountOnce() {

    useEffect(() => {
        alert("Iniciando tela")
    }, [])
    return (
        <View style={{ padding: 16}}>
            <Text>Useeffect: Montando apenas uma vez</Text>

        </View>
    )
}
  