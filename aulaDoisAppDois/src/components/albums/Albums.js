import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { getAlbums } from '../../services/api';
import { styles } from './Albums.styles';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setErro(null);

        const data = await getAlbums();
        setAlbums(data);
      } catch (e) {
        setErro(e.message ?? 'Erro ao carregar albums');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Albums</Text>

      {loading && (
        <View style={styles.loadingBox}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}

      {!loading && erro && <Text style={styles.erroText}>Erro: {erro}</Text>}

      {!loading && !erro && (
        <FlatList
          data={albums}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.id}</Text>
              </View>

              <Text style={styles.itemTitle} numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}