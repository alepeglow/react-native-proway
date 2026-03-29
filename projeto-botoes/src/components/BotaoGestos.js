import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

const BotaoGestos = () => {
  const [isVisible, setIsVisible] = useState(true);

  const alterarVisibilidade = () => {
    setIsVisible(!isVisible);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}
      onPressIn={alterarVisibilidade}
      onPressOut={alterarVisibilidade}>
        <Text style={styles.textoBotao}>Alterar visibialidade</Text>
      </TouchableOpacity>
      {
        isVisible &&
        <Text style={styles.texto}>Texto visível / oculto</Text>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default BotaoGestos;
