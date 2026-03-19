import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign : 'center'
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}