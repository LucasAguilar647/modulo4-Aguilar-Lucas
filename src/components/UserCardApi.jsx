import React, { useEffect, useState } from 'react'


export default function UserCardApi() {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    async function load() {
      setStatus('loading')
      setError(null)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()
        if (active) {
          setUsers(data)
          setStatus('success')
        }
      } catch (err) {
        if (active) {
          setError(err.message)
          setStatus('error')
        }
      }
    }
    load()
    return () => { active = false }
  }, [])

  if (status === 'loading') return <p className="muted">Cargando usuarios...</p>
  if (status === 'error') return <p className="error">Error: {error}</p>

  return (
    <div className="row">
      {users.map(usuario => (
        <article key={usuario.id} className="card" aria-label="user-card">
          <h3>{usuario.name}</h3>
          <p className="muted">{usuario.email}</p>
          <p>{usuario.company?.name} – {usuario.website}</p>
          <small className="muted">{usuario.address?.city}</small>
        </article>
      ))}
    </div>
  )
}