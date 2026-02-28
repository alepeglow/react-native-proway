import React from 'react';
import { ScrollView, View } from 'react-native';
import ComponenteCarregado from './components/ComponenteCarregado';
import DigitandoMostraTela from './components/DigitandoMostraTela';
import DoisBotoesMudanca from './components/DoisBotoesMudanca';
import FetchPostsDesafio from './components/FetchPostsDesafio';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <ScrollView>
        <ComponenteCarregado />
        <DigitandoMostraTela />
        <DoisBotoesMudanca />
        <FetchPostsDesafio />
      </ScrollView>
    </View>
  );
}