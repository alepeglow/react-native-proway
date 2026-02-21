import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Botao from './botao';

export default function CadastroPetShop() {
  const [nomePet, setNomePet] = useState('');
  const [raca, setRaca] = useState('');
  const [mensagem, setMensagem] = useState('');

  function finalizarCadastro() {
    const nomePetLimpo = nomePet.trim();
    const racaLimpa = raca.trim();

    if (nomePetLimpo === '' || racaLimpa === '') {
      setMensagem('Preencha o nome do pet e a raça.');
      return;
    }

    setMensagem(`Pet ${nomePetLimpo} da raça ${racaLimpa} cadastrado com sucesso!`);
    setNomePet('');
    setRaca('');
  }

  return (
    <View>
      <Text style={styles.titulo}>4) Cadastro Pet Shop</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Pet"
        placeholderTextColor="#B08ABF"
        value={nomePet}
        onChangeText={setNomePet}
      />

      <TextInput
        style={[styles.input, styles.inputEspaco]}
        placeholder="Raça"
        placeholderTextColor="#B08ABF"
        value={raca}
        onChangeText={setRaca}
      />

      <Botao titulo="Finalizar Cadastro" onPress={finalizarCadastro} />

      {mensagem !== '' && (
        <View style={styles.caixaMensagem}>
          <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
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
  inputEspaco: {
    marginTop: 10,
  },
  caixaMensagem: {
    marginTop: 12,
    backgroundColor: '#FCE7F8',
    borderWidth: 1,
    borderColor: '#F5B7E8',
    borderRadius: 12,
    padding: 10,
  },
  mensagem: {
    color: '#9C2C8E',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 20,
  },
});