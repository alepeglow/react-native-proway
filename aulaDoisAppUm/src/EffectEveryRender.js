import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function EffectEveryRender() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert(`Cliquei ${count} vezes`);  
    })

    return (
        <View>
            <Text>Roda a cada alteração</Text>
            <Text>Cont: {count}</Text>
            <Button 
                title="Somar"
                onPress={() => setCount(c => c + 1)} 
            />
        </View>
    )
}