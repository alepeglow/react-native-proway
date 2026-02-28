import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from './UserList.styles'
import { getUsers } from "../../services/UserList/api";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function load() {
            const json = await getUsers();
            setUsers(json);
        }

        load();
    }, [])


    function renderItem({ item }) {
        const avatar = `https://i.pravatar.cc/150?img=${item.id}`;

        return (
            <Pressable style={styles.card}>
                <Image
                    source={{ uri: avatar }}
                    style={styles.avatar}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeaderRow}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text style={styles.username}>
                            @{item.username}
                        </Text>
                    </View>
                    <Text style={styles.email}>
                        {item.email}
                    </Text>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaPill} >{item.company?.name}</Text>
                        <Text style={styles.dot}> • </Text>
                        <Text style={styles.metaText}>{item.address?.city}</Text>
                    </View>
                </View>
            </Pressable>
        )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Equipe</Text>
            <Text style={styles.subtitle}>
                Usuários do JSONPlaceholder(endpoint: /user)
            </Text>

            <FlatList
                data={users}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </View>
    )
}