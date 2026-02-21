import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function ExemploInput() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exemplo de Input</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite meu nome"
        placeholderTextColor="#B08ABF"
        value={nome}
        onChangeText={setNome}
      />

      {nome.length > 0 && (
        <Text style={styles.resultado}>Você digitou: {nome}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3C6E8',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8E3AAE',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9B8F2',
    backgroundColor: '#FDF4FF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#5E2A6E',
  },
  resultado: {
    marginTop: 8,
    color: '#A64D79',
    fontSize: 13,
  },
});