import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loadTodos } from "../storage/todoStorage";

export default function TodoScreen() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        async function carregaTodos() {
            const data = await loadTodos();
            setTodos(data);
        }
        carregaTodos();
    }, [])

    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Minhas Tarefas</Text>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Informe uma tarefa..."
                    value={text}
                    onChangeText={setText}
                />
                <TouchableOpacity
                    style={styles.addBtn}
                >
                    <Text style={styles.addText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: {total}</Text>
                <Text style={styles.summaryText}>Concluídas: {done}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 28,
        backgroundColor: '#f5f5f5'
    },

    header: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
        color:  '#333'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
        
    },
    summaryText:{
            color: '#555',
            fontWeight: '600'
        }
})