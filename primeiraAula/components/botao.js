import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Botao({
  titulo = 'Botão',
  onPress,
  grande = false,
  variante = 'primario',
}) {
  const estiloVariante =
    variante === 'secundario' ? styles.botaoSecundario : styles.botaoPrimario;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.botaoBase, estiloVariante, grande && styles.botaoGrande]}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <Text
          style={[
            styles.textoBase,
            variante === 'secundario' ? styles.textoSecundario : styles.textoPrimario,
            grande && styles.textoGrande,
          ]}
        >
          {titulo}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  botaoBase: {
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
  },
  botaoPrimario: {
    backgroundColor: '#D633B6',
    shadowColor: '#D633B6',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  botaoSecundario: {
    backgroundColor: '#FCE7F8',
    borderWidth: 1,
    borderColor: '#F5B7E8',
  },
  botaoGrande: {
    minHeight: 95,
    marginVertical: 8,
    borderRadius: 18,
  },
  textoBase: {
    fontWeight: '700',
    fontSize: 15,
  },
  textoPrimario: {
    color: '#FFFFFF',
  },
  textoSecundario: {
    color: '#9C2C8E',
  },
  textoGrande: {
    fontSize: 21,
    letterSpacing: 0.6,
  },
});