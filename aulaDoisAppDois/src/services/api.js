export async function getAlbums() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');

  if (!res.ok) {
    throw new Error('Falha ao buscar albums');
  }

  const json = await res.json();
  return json;
}