import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadTodos() {
    try {
        const json = await AsyncStorage.getItem("@todos");

        return json ? JSON.parse(json) : [];
    } catch (error) {
       console.log("Erro:" + error) ;
       return [];
    }
}
