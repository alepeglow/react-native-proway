import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Botao from './botao';

export default function ExercicioSoma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  function somar() {
    const n1 = Number(valor1);
    const n2 = Number(valor2);

    if (valor1.trim() === '' || valor2.trim() === '' || Number.isNaN(n1) || Number.isNaN(n2)) {
      setResultado('Digite dois números válidos.');
      return;
    }

    const soma = n1 + n2;
    setResultado(`Resultado: ${soma}`);
  }

  return (
    <View>
      <Text style={styles.titulo}>3) Somar dois números</Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        placeholderTextColor="#B08ABF"
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
      />

      <TextInput
        style={[styles.input, styles.inputEspaco]}
        placeholder="Segundo número"
        placeholderTextColor="#B08ABF"
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
      />

      <Botao titulo="Somar" onPress={somar} />

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
  inputEspaco: {
    marginTop: 10,
  },
  resultado: {
    marginTop: 10,
    color: '#A64D79',
    fontSize: 14,
    fontWeight: '700',
  },
});