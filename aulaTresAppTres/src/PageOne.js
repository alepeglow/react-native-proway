import { Text } from "react-native";
import { View } from "react-native";
import Button from "./Button/Button";
import { StyleSheet } from "react-native";

export default function PageOne() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Demonstração do botão genérico</Text>

            <View style={styles.card}>
                <Text style={styles.cardText}>Exemplo 1 - Ação simples</Text>

                <Button
                    text='Cadastrar'
                    onPressRecevi={() => alert('Cadastrar cliente ...')}
                />

                <Button
                    text='Consultar'
                    onPressRecevi={() => alert('Consultar cliente ...')}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: '#f5f5f5'
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#eee',

        // Sombra para android +IOS

        shadowColor: '#000',
        shadowOpacity: 0.06 ,
        shadowOffset: {width: 2 , height: 3} ,
        shadowRadius: 6 ,
        elevation: 3
    },

    cardText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 12
    }
})