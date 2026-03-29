import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function TodoItem({item, onToggle, onDelete}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onToggle(item.id)} 
                style= {styles.left}
            >
               <View style={[styles.check, item.done && styles.checkDone]} />

                <Text style={[styles.title, item.done && styles.titleDone]}>
                    {item.title}
                </Text>
              
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onDelete(item.id)}
                style={styles.deleteBtn}
            >
                <Text style={styles.deleteText}>Excluir</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        elevation: 1
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    check: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "#999" ,
        marginRight: 10
    },
    checkDone: {
       backgroundColor: "#4caf50" ,
       borderColor: '#4caf50'
    },
    title: {
        fontSize: 16,
        color: '#333'
    },
    titleDone: {
        textDecorationLine: 'line-through',
        color: '#999'
    },
    deleteBtn: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#ef5350',
        borderRadius: 6
    },
    deleteText: {
        color: '#fff',
        fontWeight: '600'
    }
})