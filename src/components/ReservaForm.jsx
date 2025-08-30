import { useState } from "react";

export default function ReservaForm({ onCrear }) {
  const [nombreCliente, setNombreCliente] = useState("");
  const [estado, setEstado] = useState("pendiente");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombreCliente.trim()) return;
    onCrear({ nombreCliente, estado });
    setNombreCliente("");
    setEstado("pendiente");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Nombre cliente"
        value={nombreCliente}
        onChange={(e) => setNombreCliente(e.target.value)}
      />
      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="pendiente">Pendiente</option>
        <option value="confirmada">Confirmada</option>
        <option value="cancelada">Cancelada</option>
      </select>
      <button type="submit">Crear reserva</button>
    </form>
  );
}
