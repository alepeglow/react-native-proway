import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function FetchPostsDesafio() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setErro(null);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

        if (!res.ok) {
          throw new Error('Falha ao buscar os dados');
        }

        const json = await res.json();
        setData(json);
      } catch (e) {
        setErro(e.message ?? 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Desafio: Fetch + Loading + Lista ✅
      </Text>

      {loading && (
        <View style={{ marginTop: 10 }}>
          <ActivityIndicator size="large" />
          <Text style={{ marginTop: 8 }}>Carregando...</Text>
        </View>
      )}

      {!loading && erro && (
        <Text style={{ marginTop: 10, color: 'red', fontWeight: '700' }}>
          Erro: {erro}
        </Text>
      )}

      {!loading && !erro && (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Text style={{ marginBottom: 10 }}>
              • {item.title}
            </Text>
          )}
        />
      )}
    </View>
  );
}