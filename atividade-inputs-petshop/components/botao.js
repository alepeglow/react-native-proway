import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#D633B6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  texto: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});