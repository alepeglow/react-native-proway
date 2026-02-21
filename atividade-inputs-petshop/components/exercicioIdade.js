import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Botao from './botao';

export default function ExercicioIdade() {
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');

  function verificarIdade() {
    const idadeNumero = Number(idade);

    if (idade.trim() === '' || Number.isNaN(idadeNumero)) {
      setResultado('Digite uma idade válida.');
      return;
    }

    if (idadeNumero >= 18) {
      setResultado('Maior de Idade');
    } else {
      setResultado('Menor de Idade');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>2) Verificar idade</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        placeholderTextColor="#B08ABF"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Botao titulo="Verificar" onPress={verificarIdade} />

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
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
    fontWeight: '700',
  },
});