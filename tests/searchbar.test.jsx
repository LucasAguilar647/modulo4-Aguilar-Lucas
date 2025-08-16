import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../src/components/SearchBar.jsx'
import { test, expect, vi } from 'vitest'

test('emite cambios', async () => {
  const user = userEvent.setup()
  const handleChange = vi.fn()

  let value = ''


  render(
    <SearchBar
      value={value}
      onChange={(val) => {
        value = val
        handleChange(val)
      }}
    />
  )


  const input = screen.getByRole('textbox')

  await user.type(input, 'L')


  expect(value).toBe('L')

})
