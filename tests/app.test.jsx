import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../src/App'

test('renderiza título principal', () => {
  render(<App />)
  expect(screen.getByText(/Demo React/i)).toBeInTheDocument()
})
