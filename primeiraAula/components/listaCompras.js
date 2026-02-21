import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ListaCompras() {
    const [itemAtual, setItemAtual] = useState('');
    const [itens, setItens] = useState([]);

    const adicionarItem = () => {

        if (itemAtual.trim() !== '') {
            setItens(itensAnteriores => [...itensAnteriores, itemAtual]);
            setItemAtual('');
        }
    }

    const limparItens = () => {
        setItens([])
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione um item"
                value={itemAtual}
                onChangeText={setItemAtual}
            />

            <Button
                style={styles.buttonContainer}
                title="Adicionar"
                onPress={adicionarItem}
            />

            <View style={{ marginBottom: 10 }} ></View>

            <Button
                style={styles.buttonContainer}
                title="Limpar"
                onPress={limparItens}
            />

            {
                itens.map((item, index) => (
                    <Text
                        key={index.toString()}
                        style={styles.item}
                    >
                        {item}
                    </Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 50,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 50,
        width: '90%',
        borderColor: '#007AFF',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 15,
        padding: 15,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3
    },
    buttonContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,

    },
    item: {
        padding: 15,
        fontSize: 18,
        height: 50,
        width: '90%',
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        marginVertical: 5,
        textAlign: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1
    }
})