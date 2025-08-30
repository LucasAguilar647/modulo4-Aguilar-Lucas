import React, { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import TodoList from './components/TodoList.jsx'
import UserCardList from './components/UserCardList.jsx'
import ReservasPage from './page/ReservaPage.jsx'
import UserCardApi from './components/UserCardApi.jsx'

export default function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="app">
      <header className="card">
        <h1>Frontend y Calidad</h1>
        <p className="muted">
          Componentes funcionales reutilizables, eventos del DOM, consumo de API y pruebas unitarias.
        </p>
      </header>

      <section className="row">
        <div className="card">
          <h2>1- Búsqueda</h2>
          <SearchBar value={query} onChange={setQuery} placeholder="Filtrar tareas por texto..." />
        </div>

        <div className="card">
          <h2>2- Lista de Tareas</h2>
          <TodoList filter={query} />
        </div>
      </section>

      <section className="card">
        <h2>3- Usuarios</h2>
        <UserCardApi />
      </section>

      <header className="card">
      <h1>Consumo de mi backend</h1>
      </header>
      

      <section className="card">
        <h2>3- Usuarios</h2>
        <UserCardList />
      </section>

      <section className="card">
        <ReservasPage /> 
      </section>
    </div>
  )
}
