import React from 'react';
import { SafeAreaView } from 'react-native';
import Albums from './src/components/albums/Albums';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 60 }}>
      <Albums />
    </SafeAreaView>
  );
}