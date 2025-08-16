import { render, screen, waitFor } from '@testing-library/react'
import UserCardList from '../src/components/UserCardList.jsx'
import { afterAll, beforeAll, test, vi } from 'vitest'

// Mock de fetch para evitar red real
const fakeUsers = [{ id: 1, name: 'Ada Lovelace', email: 'ada@algo', company:{name:'Math Co'}, website: 'ada.dev', address:{city:'London'} }]

beforeAll(() => {
  global.fetch = vi.fn(async () => ({
    ok: true,
    json: async () => fakeUsers
  }))
})

afterAll(() => {
  global.fetch.mockRestore && global.fetch.mockRestore()
})

test('muestra usuarios desde la API', async () => {
  render(<UserCardList />)
  expect(screen.getByText(/Cargando usuarios/)).toBeInTheDocument()
  await waitFor(() => expect(screen.getByText('Ada Lovelace')).toBeInTheDocument())
  expect(screen.getAllByLabelText('user-card').length).toBe(1)
})
