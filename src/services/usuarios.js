const API_URL = "http://localhost:8085/usuarios";

export async function listarUsuarios() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }
  return await response.json();
}

export async function crearUsuario(usuario) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!response.ok) {
    throw new Error("Error al crear usuario");
  }
}
