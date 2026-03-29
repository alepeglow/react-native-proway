import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const BotaoOpacity = () => {
    const [cor, setCor] = useState("blue");

    const botaoClique = () => {
        console.log("Clicado...")
    }

    const iniciaClique = () => {
        setCor("red");
    }

    const finalizaClique = () => {
        setCor("blue")
    }

    const cliqueLongo = () => {
        alert("Longo...")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.botao, { backgroundColor: cor }]}
                onPressIn={iniciaClique}
                onPressOut={finalizaClique}
                onLongPress={cliqueLongo}
            >
                <Text style={styles.botaoTexto}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5
    },
    botaoTexto: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default BotaoOpacity;