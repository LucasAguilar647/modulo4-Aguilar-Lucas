import React, { useState, useMemo } from 'react'


export default function TodoList({ filter = '' }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Leer documentación', done: false },
    { id: 2, text: 'Escribir pruebas', done: true },
  ])
  const [text, setText] = useState('')

  const filtered = useMemo(() => {
    const filtro = filter.trim().toLowerCase()
    if (!filtro) return todos
    return todos.filter(t => t.text.toLowerCase().includes(filtro))
  }, [filter, todos])

  function addTodo(e) {
    e.preventDefault()
    if (!text.trim()) return
    setTodos(prev => [...prev, { id: Date.now(), text: text.trim(), done: false }])
    setText('')
  }

  function toggle(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function remove(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '.5rem', marginBottom: '.75rem' }}>
        <input
          aria-label="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nueva tarea..." />
        <button className="primary" type="submit">Agregar</button>
      </form>

      {filtered.length === 0 ? (
        <p className="muted">No hay tareas que coincidan.</p>
      ) : (
        <ul>
          {filtered.map(t => (
            <li key={t.id}>
              <label style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  aria-label={`toggle-${t.id}`}
                  checked={t.done}
                  onChange={() => toggle(t.id)} />
                <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
              </label>
              <button onClick={() => remove(t.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
