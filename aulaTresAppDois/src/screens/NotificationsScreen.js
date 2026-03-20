import { FlatList, Text , StyleSheet} from "react-native"
import { View } from "react-native"

const MOCK = [
    {id: '1', text: 'Bem-vindo ao  app.'},
    {id: '2', text: 'BAtualizações disponíveis amanhã.'},
    {id: '3', text: 'Seu perfil foi visualizado 5x hoje.'}
]

export default function NotificationsScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Notificações </Text>

            <FlatList
                style={{width: '100%', maxWidth:420}}
                data={MOCK}
                keyExtractor={(item) => item.id}
                handlerItem={({item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}> {item.text}</Text>
                    </View>
                )}

                contentContainerStyle={{gap: 20}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   
    container : {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        gap: 16
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 12
    },

    card : {
        width: '100%',
        backgroundColor: '#f5f5ff',
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee'
    },

    cardText: {
        fontSize: 16
    }
});