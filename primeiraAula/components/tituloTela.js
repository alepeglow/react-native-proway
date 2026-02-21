import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TituloTela({ titulo, subtitulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7A1CAC',
    textAlign: 'center',
  },
  subtitulo: {
    marginTop: 6,
    fontSize: 14,
    color: '#A64D79',
    textAlign: 'center',
  },
});