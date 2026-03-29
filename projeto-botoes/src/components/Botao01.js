import { Text, TouchableHighlight, View } from "react-native"
import { Button } from "react-native-web";

const Botao01 = () => {

    const cliquei = () => {
        alert("Clique do botão comum");
    }

    const cliqueHighlight = () => {
        alert("Clique do botão cliqueHighlight")
    }

    return (
        <View>
            <Text>Exemplo usando diversos botões</Text>

            <View style={{ margin: 10 }} />

            <Button
                title="Clique aqui (Botão comum)"
                onPress={cliquei}
            />

            <View style={{ margin: 10 }} />

            <TouchableHighlight
                onPress={cliqueHighlight}
                underlayColor="lightgray"
            >
                <Text>Clique aqui (botão highlight)</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Botao01;