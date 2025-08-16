import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from '../src/components/TodoList.jsx'
import { test } from 'vitest'

test('agrega y elimina tareas', async () => {
  const user = userEvent.setup()
  render(<TodoList />)

  const input = screen.getByLabelText('todo-input')
  await user.type(input, 'Nueva tarea{enter}') // submit con Enter

  expect(screen.getByText('Nueva tarea')).toBeInTheDocument()

  // eliminar la tarea recien creada (último botón "Eliminar")
  const buttons = screen.getAllByRole('button', { name: /Eliminar/i })
  await user.click(buttons[buttons.length - 1])

  expect(screen.queryByText('Nueva tarea')).not.toBeInTheDocument()
})
