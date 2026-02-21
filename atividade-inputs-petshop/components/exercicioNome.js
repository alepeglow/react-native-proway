import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function ExercicioNome() {
  const [nome, setNome] = useState('');

  return (
    <View>
      <Text style={styles.titulo}>1) Digitar nome e mostrar mensagem</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#B08ABF"
        value={nome}
        onChangeText={setNome}
      />

      {nome.trim().length > 0 && (
        <Text style={styles.resultado}>Olá, {nome}! 👋</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8E3AAE',
    marginBottom: 10,
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
    marginTop: 10,
    color: '#A64D79',
    fontSize: 14,
    fontWeight: '600',
  },
});