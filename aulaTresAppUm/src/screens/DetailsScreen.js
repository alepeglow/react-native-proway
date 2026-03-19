import { Button, Text, View } from "react-native";

export default function DetailsScreen(navigation) {
  return (
    <View>
      <Text>Details</Text>
      <View>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
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
