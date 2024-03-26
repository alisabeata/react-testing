import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

// the A concept:

// - Arrange
// set up the test data, test conditions and test environment

// - Act
// run logic that should be tested

// - Assert
// compare execution results with expected results

describe('Greeting component', () => {
  test('renders text', () => {
    // arrange
    render(<Greeting />)

    // act
    // ... hothing here

    // assert
    const helloWorldElement = screen.getByText('Hello world', { exact: false })
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders if the button in NOT clicked', () => {
    // arrange
    render(<Greeting />)

    // act
    // ... hothing here

    // assert
    const outputElement = screen.getByText('Some text', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('renders if the button in was clicked', async () => {
    // arrange
    render(<Greeting />)

    // act
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      const buttonElement = screen.getByRole('button')
      userEvent.click(buttonElement)
    })

    // assert
    const outputElement = screen.getByText('Changed', { exact: false })
    const hiddenElement = screen.queryByText('Some text', { exact: false })
    expect(outputElement).toBeInTheDocument()
    // expect(hiddenElement).not.toBeInTheDocument() or
    expect(hiddenElement).toBeNull()
  })
})
