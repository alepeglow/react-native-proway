import { View, Text, StyleSheet } from 'react-native';

export default function ViagensScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo das Viagens</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Quantidade de viagens</Text>
        <Text style={styles.valor}>12</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Gastos de viagem</Text>
        <Text style={styles.valor}>R$ 2.350,00</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Viagens pendentes</Text>
        <Text style={styles.valor}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  valor: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});