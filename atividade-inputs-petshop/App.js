import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';

import TituloTela from './components/TituloTela';
import Card from './components/card';
import ExercicioNome from './components/exercicioNome';
import ExercicioIdade from './components/exercicioIdade';
import ExercicioSoma from './components/exercicioSoma';
import CadastroPetShop from './components/cadastroPetShop';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TituloTela
          titulo="Atividade - Inputs e Formulários"
          subtitulo="React Native (tema lilás/rosa)"
        />

        <Card>
          <ExercicioNome />
        </Card>

        <Card>
          <ExercicioIdade />
        </Card>

        <Card>
          <ExercicioSoma />
        </Card>

        <Card>
          <CadastroPetShop />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1FA',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
});