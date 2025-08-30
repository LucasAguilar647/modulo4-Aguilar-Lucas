const API_URL = "http://localhost:8085/reservas";


const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error en la petición");
  }
  return response.json();
};


export const obtenerReservas = async () => {
  const response = await fetch(API_URL);
  return handleResponse(response);
};

export const obtenerReservaPorId = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
};


export const crearReserva = async (reserva) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reserva),
  });
  return handleResponse(response);
};


export const eliminarReserva = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al eliminar la reserva");
  }
};


export const actualizarEstado = async (id, estado) => {
  const response = await fetch(`${API_URL}/${id}/estado?estado=${estado}`, {
    method: "PUT",
  });
  return handleResponse(response);
};
