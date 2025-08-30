export default function ReservaCard({ reserva, onEliminar, onActualizarEstado }) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        <p><strong>ClienteID:</strong> {reserva.usuarioId}</p>
        <p><strong>Estado:</strong> {reserva.estado}</p>
        <p><strong>Fecha:</strong> {reserva.fecha}</p>
  
        <button onClick={() => onEliminar(reserva.id)}>Eliminar</button>
        <button onClick={() => onActualizarEstado(reserva.id, "confirmada")}>
          Confirmar
        </button>
        <button onClick={() => onActualizarEstado(reserva.id, "cancelada")}>
          Cancelar
        </button>
      </div>
    );
  }
  