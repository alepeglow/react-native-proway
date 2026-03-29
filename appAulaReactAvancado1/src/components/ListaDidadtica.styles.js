import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor:'#f2f2f2'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    },
    footer: {
        textAlign: 'center',
        marginTop: 20,
        opacity: 0.6
    },
    empty: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical:  40,
        opacity: 0.7
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2
    },
    cardText: {
        fontSize: 16
    },
    button: {
        backgroundColor: '#2b8a3e',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 16
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})