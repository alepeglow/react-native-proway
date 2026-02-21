import { useState } from "react";
import { Button,StyleSheet,Text,View } from "react-native-web";

export default  function Contador() {
    const[contador,setContador] = useState(0);
    var contadorDinamico = 0;
    const incrementar = () => {
        contadorDinamico++;
        setContador(contadorDinamico);
    }
    return (
        <View style={styles.container}>
            <Text >Contador: {contador}</Text>
            <Button 
            title="Incrementar" 
            onPress={incrementar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});