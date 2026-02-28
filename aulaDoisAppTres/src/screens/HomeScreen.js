import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{
            flex: 1, padding: 16,
            gap: 16, justifyContent: 'center'
        }}>
            <Text style={{
                color: "white", fontSize: 16,
                fontWeight: '700', textAlign: "center"
            }} >
                Home
            </Text>

            <Button
                title="Ir para Detalhes"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    )
}