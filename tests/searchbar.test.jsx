import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../src/components/SearchBar.jsx'
import { test, expect, vi } from 'vitest'

test('emite cambios y puede limpiarse', async () => {
  const user = userEvent.setup()
  const handleChange = vi.fn()

  render(<SearchBar value="" onChange={handleChange} />)
  const input = screen.getByRole('textbox')

  await user.type(input, 'Lucas')

  
  expect(handleChange).toHaveBeenCalledWith('Lucas')

  const clear = screen.getByRole('button', { name: /limpiar/i })
  await user.click(clear)

  expect(handleChange).toHaveBeenLastCalledWith('')
})
