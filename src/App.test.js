import { render, screen } from '@testing-library/react'
import App from './App'

// The test environment is already set up in the create-react-app
// "@testing-library/jest-dom"
// "@testing-library/react"
// "@testing-library/user-event"

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
