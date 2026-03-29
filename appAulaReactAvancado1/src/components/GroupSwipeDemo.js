import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const dadosIniciais = {
  A: [
    { id: "1", nome: "Ana" },
    { id: "2", nome: "Aline" },
  ],
  B: [{ id: "3", nome: "Bruno" }],
  C: [
    { id: "4", nome: "Carlos" },
    { id: "5", nome: "Cecília" },
  ],
};

export default function GroupSwipeDemo() {
  const [dados, setDados] = useState(dadosIniciais);

  const listaFlatten = [];

  for (const secao in dados) {
    listaFlatten.push({
      type: "header",
      title: secao,
      id: "h-" + secao,
    });

    dados[secao].forEach((item) =>
      listaFlatten.push({
        type: "item",
        ...item,
      })
    );
  }

  function excluirItem(id) {
    const novo = {};

    for (const secao in dados) {
      const filtrados = dados[secao].filter((item) => item.id !== id);

      if (filtrados.length > 0) {
        novo[secao] = filtrados;
      }
    }

    setDados(novo);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agrupamento + Swipe</Text>

      <SwipeListView
        data={listaFlatten}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.type === "header" ? (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{item.title}</Text>
            </View>
          ) : (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.nome}</Text>
            </View>
          )
        }
        renderHiddenItem={() => <View />}
        rightOpenValue={-80}
        disableRightSwipe={true}
        stopRightSwipe={-80}
        onRowOpen={(rowKey, rowMap) => {
          if (!rowMap[rowKey]) return;

          const item = listaFlatten.find(
            (i) => i.id === rowKey && i.type === "item"
          );

          if (item) excluirItem(rowKey);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f6f6",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
  },
});