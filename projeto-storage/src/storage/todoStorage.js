import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadTodos() {
    try {
        const json = await AsyncStorage.getItem("@todos");

        return json ? JSON.parse(json) : [];
    } catch (error) {
       console.warn("Erro:" + error) ;
       return [];
    }
}

export async function saveTodos(todos) {
   try {
    const json = JSON.stringify(todos);
    await AsyncStorage.setItem("@todos" , json)
   } catch (error) {
    console.warn("Erro ao salvar dados..." + error)
   } 
}

export async function clearTodos() {
    try {
        await AsyncStorage.removeItem("@todos");
    } catch (error) {
        console.warn("Erro ao limpar dados..." + error);
    }
}