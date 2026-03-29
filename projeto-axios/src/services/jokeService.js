import axios from "axios";

const API_URL = 'https://v2.jokeapi.dev/joke/Any?lang=pt&safe-mode';

export async function buscarPiada() {
    const response = await axios.get(API_URL);

    if(response.data.type === 'single') {
        return response.data.joke;
    }
    return `${response.data.setup}\n\n ${response.data.delivery}`
}