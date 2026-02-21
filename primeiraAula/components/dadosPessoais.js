import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DadosPessoais(props) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>AP</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.info}>Profissão: Estudante / Dev em formação</Text>
        <Text style={styles.info}>E-mail: ale@email.com</Text>
        <Text style={styles.info}>Telefone: (00) 00000-0000</Text>
        <Text style={styles.info}>Idade: {props.idade} anos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8E8FF',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9B8F2',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#C85CFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#C85CFF',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  avatarTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoBox: {
    flex: 1,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 4,
  },
  info: {
    fontSize: 13,
    color: '#7B4B7D',
    marginTop: 2,
  },
});