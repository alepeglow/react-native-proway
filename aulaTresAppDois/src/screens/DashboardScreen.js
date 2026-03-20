import { StyleSheet } from "react-native";
import { Button, Text, View } from "react-native";

export default function DashboardScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>App e atalhos rápidos</Text>

            <View style={styles.buttons}>
                <Button
                    title="Ir para Buscar"
                    onPress={() => navigation.navigate('Search')}
                
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },

    title: {
        fontSize: 28,
        fontWeight: '700'
    },

    subtitle: {
        fontSize: 16,
        color: '#555'
    },

    buttons: {
        width: 240,
        marginTop: 16
    }
})