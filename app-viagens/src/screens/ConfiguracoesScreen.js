import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ConfiguracoesScreen() {
  const [senha, setSenha] = useState('');
  const [senhaDigitada, setSenhaDigitada] = useState('');

  function mudarSenha() {
    setSenhaDigitada(senha);
    Alert.alert('Senha digitada', senha);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={mudarSenha}>
        <Text style={styles.textoBotao}>Mudar</Text>
      </TouchableOpacity>

      {senhaDigitada !== '' && (
        <Text style={styles.resultado}>Você digitou: {senhaDigitada}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});