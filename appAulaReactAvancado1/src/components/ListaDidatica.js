import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from './ListaDidadtica.styles'

export default function ListaDidatica() {
    const [lista,setLista] = useState([]);

    function adicionarItem() {
        const novo = {id: Date.now().toString(), nome: 'Novo Item'};
        setLista((prev) => [...prev,novo]);
    }

    return(
        <View style={styles.container}>

            <FlatList
                data={lista}
                keyExtractor={(item) => item.id}
                
                //Cabeçalho do flatlist
                ListHeaderComponent={
                    <Text style={styles.header}>
                        Cabeçalho da minha lista 
                    </Text>
                }

                //Rodapé

                ListFooterComponent={
                    <Text style={styles.footer}>
                        Rodapé da minha lista 
                    </Text>
                }
                // quando a lista estiver vazia
                ListEmptyComponent={
                    <Text style={styles.empty}>Lista sem dados</Text>
                }
                
                //Corpo 

                renderItem={({ item}) =>  {
                    <View style={styles.card}>
                        <Text style={styles.cardText}>{item.nome}</Text>
                    </View>
                }}
            
            />

            <TouchableOpacity
            style={styles.button}
            onPress={adicionarItem}>  
            <Text style={styles.buttonText}>Adicionar Item</Text>

            </TouchableOpacity>
        </View>

    )

}