import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function DigitandoMostraTela() {
  const [texto, setTexto] = useState('');

  function handleChange(valor) {
    setTexto(valor);
    console.log('Digitando:', valor);
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Atividade 2: digitar e mostrar ✅
      </Text>

      <TextInput
        placeholder="Digite algo..."
        value={texto}
        onChangeText={handleChange}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      />

      <Text style={{ marginTop: 12, fontSize: 16 }}>
        Você digitou: {texto}
      </Text>
    </View>
  );
}