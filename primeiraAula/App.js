import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TituloTela from './components/tituloTela';
import Card from './components/card';
import DadosPessoais from './components/dadosPessoais';
import Botao from './components/botao';
import ExemploInput from './components/exemploInput';
import { TextInput } from 'react-native';
import Formulario from './components/formulario';
import ListaCompras from './components/listaCompras';
import Relogio from './components/relogio';

export default function App() {
  const [telaAtual, setTelaAtual] = useState(1);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
    <Formulario />
    <ListaCompras />
    <Relogio />
    <Professor nome="Alessandra Peglow" />
    <Aluno/>
      <TituloTela
        titulo="Prática React Native"
        subtitulo="Perfil + alinhamento + duas views + estilização"
      />

      {telaAtual === 1 ? (
        <Card>
          <View style={styles.secao}>
            <TextInput style={styles.secaoTitulo}>Exemplo de Input</TextInput>
            <TextInput
              placeholder='Digite sua senha'
              placeholderTextColor='#888'
              secureTextEntry= {true}/>
            <ExemploInput />
          </View>

          <View style={styles.secao}>
            <Text style={styles.secaoTitulo}>Meu Perfil</Text>
            <DadosPessoais nome="Alessandra Peglow Colvara de Souza" idade="33" />
            <View style={styles.espacoEntrePerfis} />
            <DadosPessoais nome="João Silva" idade="28" />
          </View>

          <View style={styles.secao}>
            <Text style={styles.secaoTitulo}>Primeira View</Text>

            {/* Dois botões, um embaixo do outro */}
            <Botao
              titulo="Acessar conteúdo"
              onPress={() => alert('Conteúdo acessado!')}
            />

            <Botao
              titulo="Ir para View 2"
              variante="secundario"
              onPress={() => setTelaAtual(2)}
            />
          </View>
        </Card>
      ) : (
        <Card>
          <Text style={styles.secaoTitulo}>Segunda View</Text>

          <Text style={styles.textoInfo}>
            Aqui está o botão grande solicitado na atividade 💜
          </Text>

          {/* Botão grande */}
          <Botao
            titulo="BOTÃO GRANDE"
            grande
            onPress={() => alert('Botão grande pressionado!')}
          />

          <Botao
            titulo="Voltar para View 1"
            variante="secundario"
            onPress={() => setTelaAtual(1)}
          />
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1FA',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  secao: {
    marginBottom: 16,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8E3AAE',
    marginBottom: 10,
  },
  textoInfo: {
    fontSize: 14,
    color: '#7A557A',
    marginBottom: 16,
    lineHeight: 20,
  },
  espacoEntrePerfis: {
    height: 10,
  },
});