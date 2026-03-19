import { Button, Text } from "react-native";
import { View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>

      <View>
        <Button
          title="Ir para Detalhes"
          onPress={() => navigation.navigate("Details")}
        />
      </View>

      <View>
        <Button
          title="Ir para Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}
