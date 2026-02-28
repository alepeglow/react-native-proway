import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export function EffectFetchOnce() {
    const [data, setData] = useState([]);

    useEffect(() => {

        async function load() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            // validar se retorno deu 200 (ok)
            if (!res.ok) throw new Error("Falha ao buscar dados");

            const json = await res.json();
            setData(json);

            console.log(json);
        }

        load()

    }, [])

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, marginBottom: 8 }}>
                EffectFetchOnce
            </Text>

            <FlatList
                data={data} /* Dados a serem apresentados */
                keyExtractor={(item) => String(item.id)} /*Identificados único */
                renderItem={ ({item}) => <Text> {item.title} </Text> }
            />
        </View>
    )
}