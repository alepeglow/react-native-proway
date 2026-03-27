import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { View } from "react-native";

export default function ExemploStorage() {

    const [nome,setNome] = useState("");

    async function salvarNome() {
        await AsyncStorage.setItem("@nome", nome)
        alert("Nome salvo com sucesso.")
    }

    useEffect(() => {

        async function carregarNome() {
            const nomeSalvo =AsyncStorage.getItem("@nome");
            if(nomeSalvo) 
                setNome(nomeSalvo);
            
        }
        carregarNome();
    }, [])

    return(
        <View style={{padding: 20}}>
            <Text>Digite seu nome:</Text>

            <TextInput
                style={{
                   borderWidth: 1,
                   padding: 10, 
                   marginTop: 10,
                   marginBottom: 10 

                }}
                value={nome}
                onChangeText={setNome}
            
            />

            <Button
                title="Salvar"
                onPress={salvarNome}
            />

            <Text
               style={{marginTop: 20 , fontSize: 18}} 
            >
              Nome salvo: {nome}  
            </Text>
        </View>
    )
}