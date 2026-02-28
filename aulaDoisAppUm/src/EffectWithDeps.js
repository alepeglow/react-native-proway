import { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function EffectWithDeps() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    alert("Disparando useEffect ao carregar a página");
  }, []);

  useEffect(() => {
    alert("Texto alterado");
  }, [texto]);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 21 }}>Effect com dependências</Text>
      <TextInput
        placeholder="Digite sua mensagem..."
        value={texto}
        onChangeText={setTexto}
      />
    </View>
  );
}