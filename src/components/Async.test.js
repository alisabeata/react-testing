import { render, screen } from '@testing-library/react'
import Async from './Async'

// roles for .getAllByRole('...') are available here:
// https://www.w3.org/TR/html-aria/#docconformance

describe('Async component', () => {
  test('renders posts', async () => {
    // overriding the build-in mock fetch with the custom fetch
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'Post title' }],
    })

    render(<Async />)

    // const listItemElements = screen.getAllByRole('listitem')
    // findAllByRole is async method of getting elements
    // it might have three parametrs: .findAllByRole('listitem', {exact .. }, {timeout.. })
    // timeout by default is 1sec
    const listItemElements = await screen.findAllByRole('listitem')
    expect(listItemElements).not.toHaveLength(0)
  })
})
