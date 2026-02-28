import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function ComponenteCarregado() {
  useEffect(() => {
    console.log('componente carregado');
    alert('componente carregado');
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Atividade 1: componente carregado ✅</Text>
    </View>
  );
}