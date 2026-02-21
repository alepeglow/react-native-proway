import { useState } from "react";
import { TextInput, Button } from "react-native";
import { View } from "react-native";

export default function Formulario() {
    const [nome,setNome] = useState('');
    const [ sobrenome, setSobrenome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    const handleSubmit = ( ) => {
        setNomeCompleto(`${nome} ${sobrenome}`);
    }
    return (
        <View>
            <TextInput 
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput 
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
            />
            <Button
                title="Mostrar Nome Completo"
                onPress={handleSubmit}          
            />

            {
                nomeCompleto !== '' && (
                    <Text>Nome Completo: {nomeCompleto}</Text>
                )
            }
        </View>
    )
}