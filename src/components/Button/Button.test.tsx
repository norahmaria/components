import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { Button } from '../../components/index'

describe('Button Component', () => {
  it('Can render', () => {
    const { getByRole } = render(<Button>Hello World</Button>)
    expect(getByRole('button')).toMatchSnapshot()
  })

  it('Can render non default variants', () => {
    const buttons = render(
      <>
        <Button variant="outlined">Hello World</Button>
        <Button variant="secondary">Hello World</Button>
      </>
    )

    expect(buttons.getAllByRole('button')).toMatchSnapshot()
    expect(buttons.getAllByRole('button')).toHaveLength(2)
  })

  it('Can toggle click class', async () => {
    const { getByRole } = render(<Button>Hello World</Button>)
    const button = getByRole('button')

    button.click()
    expect(button).toHaveClass('click')

    await waitFor(() => {
      expect(button).not.toHaveClass('click')
    })
  })

  it('Can render loading icon', () => {
    const { getByTestId } = render(<Button isLoading={true}>Hello World</Button>)
    const button = getByTestId('btn-loading-icon')

    expect(button).toBeInTheDocument()
  })

  it('Ignores click if button is loading', () => {
    const onClick = jest.fn()

    const { getByTestId } = render(
      <Button onClick={jest.fn()} isLoading={true}>
        Hello World
      </Button>
    )
    const button = getByTestId('btn-loading-icon')

    button.click()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('Ignores click if button is disabled', () => {
    const onClick = jest.fn()

    const { getByText } = render(
      <Button onClick={jest.fn()} disabled>
        Hello World
      </Button>
    )
    const button = getByText('Hello World')

    button.click()
    expect(onClick).not.toHaveBeenCalled()
  })
})
