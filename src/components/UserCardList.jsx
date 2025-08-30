import React, { useEffect, useState } from 'react'
import { listarUsuarios } from '../services/usuarios';
import { CrearUsuario } from './CrearUsuario';



export default function UserCardList() {
  const [usuarios, setUsuarios] = useState([]);
 

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await listarUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="row">
      <div>
      <CrearUsuario onUsuarioCreado={cargarUsuarios} />

      </div>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} - {u.email}
          </li>
        ))}
      </ul>
      
    </div>
  )
}