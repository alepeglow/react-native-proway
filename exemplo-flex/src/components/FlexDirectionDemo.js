import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function FlexDirectionDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo utilizando flexdirection...</Text>
      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },

    box: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'pink'
    },

    row: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd' ,
        marginBottom: 24,
        gap: 12,
        flexDirection: 'row'
    }

})