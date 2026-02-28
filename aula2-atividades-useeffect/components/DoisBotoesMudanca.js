import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function DoisBotoesMudanca() {
  const [mensagem, setMensagem] = useState('Nenhum botão foi clicado ainda.');

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Atividade 3: dois botões ✅
      </Text>

      <Text style={{ marginBottom: 12, fontSize: 16 }}>{mensagem}</Text>

      <TouchableOpacity
        onPress={() => setMensagem('Você clicou no Botão A')}
        style={{
          backgroundColor: '#7c3aed',
          paddingVertical: 12,
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '700' }}>Botão A</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setMensagem('Você clicou no Botão B')}
        style={{
          backgroundColor: '#e9d5ff',
          paddingVertical: 12,
          borderRadius: 10,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#c4b5fd',
        }}
      >
        <Text style={{ color: '#4c1d95', fontWeight: '700' }}>Botão B</Text>
      </TouchableOpacity>
    </View>
  );
}