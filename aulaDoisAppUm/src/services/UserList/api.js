const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers() {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) throw new Error("Erro ao buscar usuários");

    return res.json();
}