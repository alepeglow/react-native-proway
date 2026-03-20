import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

export default function  FlexBasics() {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.label}>A</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.label}>B</Text>
            </View>

             <View style={styles.box}>
                <Text style={styles.label}>C</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        padding: 16,
        gap: 16
    },

    box: {
        height: 80 ,
        backgroundColor: 'blue',
        borderRadius: 8,
        justifyContent:'center', // centraliza verticalmente
        alignItems: 'center' // centraliza horizontalmente
    },

    label: {

    }

})