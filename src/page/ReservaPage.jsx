import { useEffect, useState } from "react";
import { actualizarEstado, crearReserva, eliminarReserva, obtenerReservas } from "../services/reservas";
import ReservaForm from "../components/ReservaForm";
import ReservaList from "../components/ReservaList";


export default function ReservasPage() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    const data = await obtenerReservas();
    setReservas(data);
  };

  const handleCrear = async (reserva) => {
    await crearReserva(reserva);
    cargarReservas();
  };

  const handleEliminar = async (id) => {
    await eliminarReserva(id);
    cargarReservas();
  };

  const handleActualizarEstado = async (id, estado) => {
    await actualizarEstado(id, estado);
    cargarReservas();
  };

  return (
    <div>
      <h2>Gestión de Reservas</h2>
      <ReservaForm onCrear={handleCrear} />
      <ReservaList
        reservas={reservas}
        onEliminar={handleEliminar}
        onActualizarEstado={handleActualizarEstado}
      />
    </div>
  );
}
