import ReservaCard from "./ReservaCard";

export default function ReservaList({ reservas, onEliminar, onActualizarEstado }) {
  if (!reservas.length) return <p>No hay reservas registradas</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {reservas.map((r) => (
        <li key={r.id}>
          <ReservaCard
            reserva={r}
            onEliminar={onEliminar}
            onActualizarEstado={onActualizarEstado}
          />
        </li>
      ))}
    </ul>
  );
}
