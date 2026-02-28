import { Button, Text, View } from "react-native";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{
            flex: 1, padding: 16,
            gap: 16, justifyContent: 'center'
        }}>
            <Text style={{
                color: "white", fontSize: 16,
                fontWeight: '700', textAlign: "center"
            }} >
                Detalhes
            </Text>

            <Button 
                title="Ir para home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}