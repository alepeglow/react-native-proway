import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const BotaoInterativo = () => {
    const [botaoPressionado, setBotaoPressionado] = useState(false);
    const botaoCor = botaoPressionado ? 'red' : 'blue';

    const aoPressionarBotao = () => {
        setBotaoPressionado(true);
    }

    const aoSoltarBotao = () => {
        setBotaoPressionado(false);
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={[styles.botao, { backgroundColor: botaoCor }]}
                onPress={aoPressionarBotao}
                onPressOut={aoSoltarBotao}
            >
                <Text>
                    Clique aqui
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    botao: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5
    },
    botaoTex: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default BotaoInterativo;