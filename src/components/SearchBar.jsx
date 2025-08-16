import React from 'react'


export default function SearchBar({ value, onChange, placeholder = 'Buscar...' }) {
  return (
    <div style={{ display: 'flex', gap: '.5rem' }}>
      <input
        type="text"
        aria-label="search-input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          aria-label="clear"
          className="ghost"
          onClick={() => onChange('')}
        >
          Limpiar
        </button>
      )}
    </div>
  )
}
