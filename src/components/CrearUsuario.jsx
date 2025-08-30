import { useState } from "react";
import { crearUsuario } from "../services/usuarios";

export function CrearUsuario({ onUsuarioCreado }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearUsuario({ nombre, email });
      setNombre("");
      setEmail("");
      if (onUsuarioCreado) {
        onUsuarioCreado(); 
      }
    } catch (error) {
      console.error("Error creando usuario", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
