import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { buscarPiada } from "../services/jokeService";

export default function PiadaScreen() {
    const [piadas, setPiadas] = useState([]);

    async function BuscarPiada() {
        try {
            const novaPiada = await buscarPiada();

            const objeto = {
                id: Date.now().toString(),
                texto: novaPiada
            }

            setPiadas((prev) => [objeto, ...prev]);
        } catch (error) {
            alert("Erro ao buscar dados...");
        }
    }

    return (
        <View>
            <Text>Piadas</Text>

            <TouchableOpacity
                onPress={BuscarPiada}
            >
                <Text>
                    Buscar nova Piada
                </Text>
            </TouchableOpacity>

            <FlatList
                data={piadas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>
                        {item.texto}
                    </Text>
                )}

                ListHeaderComponent={
                    <Text>Últimas Piadas buscadas</Text>
                }

                ListEmptyComponent={
                    <Text>
                        Nenhuma piada ainda, busque uma!
                    </Text>
                }

                ListFooterComponent={
                    <Text>Fim das piadas! </Text>
                }
            />
        </View>
    )
}