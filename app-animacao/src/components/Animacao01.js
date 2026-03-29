import { useState } from "react";
import { Animated, View } from "react-native";

const Animacao01 = () => {
    const [largura, setLargura] = useState(new Animated.Value(0));
    const [altura, setAltura] = useState(new Animated.Value(30));
    const [opacidade, setOpacidade] = useState(new Animated.Value(1));

    Animated.sequence([
        Animated.timing(
            largura,
            {
                toValue: 420,
                duration: 1000
            }
        ),
        Animated.timing(
            altura,
            {
                toValue: 500,
                duration: 1000
            }
        ),
        Animated.timing(
            opacidade,
            {
                toValue: 0,
                duration: 2000
            }
        )
    ]).start()

    return (
        <View>
            <Animated.View
                style={{
                    width: largura,
                    height: altura,
                    opacity: opacidade,
                    backgroundColor: '#222'
                }}
            >

            </Animated.View>
        </View>
    )
}

export default Animacao01;