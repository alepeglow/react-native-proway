import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function ProfileScreen({ navigation }) {
    return(
  <View>
    <Text>Profile</Text>

    <View>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
    <View>
      <Button
        title="Ir para home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  </View>
  )
}
