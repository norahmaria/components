import React from 'react'
import { act, render, waitFor } from '@testing-library/react'

import { Button } from '../../components/index'

describe('Button Component', () => {
  it('Can render', () => {
    const { getByRole } = render(
      <Button onButtonClick={() => {}}>Hello World</Button>
    )

    expect(getByRole('button')).toMatchSnapshot()
  })

  it('Can render non default variants', () => {
    const buttons = render(
      <>
        <Button onButtonClick={() => {}} variant="outlined">
          Hello World
        </Button>
        <Button onButtonClick={() => {}} variant="secondary">
          Hello World
        </Button>
      </>
    )

    expect(buttons.getAllByRole('button')).toMatchSnapshot()
  })

  it('Can toggle click class', async () => {
    const { getByRole } = render(
      <Button onButtonClick={() => {}}>Hello World</Button>
    )
    const button = getByRole('button')

    button.click()
    expect(button).toHaveClass('clicked-true')

    await waitFor(() => {
      expect(button).not.toHaveClass('clicked-true')
    })
  })

  it('Can render loading icon', () => {
    const { getByTestId } = render(
      <Button onButtonClick={() => {}} isLoading={true}>
        Hello World
      </Button>
    )

    const loadingIcon = getByTestId('btn-loading-icon')
    expect(loadingIcon).toBeInTheDocument()
  })

  it('Ignores click if button is loading or disabled', () => {
    const loadingClick = jest.fn()
    const disabledClick = jest.fn()

    const { getByTestId, getByText } = render(
      <>
        <Button onButtonClick={jest.fn()} isLoading={true}>
          Loading Button
        </Button>
        <Button onButtonClick={jest.fn()}>Disabled Button</Button>
      </>
    )

    const loadingButton = getByTestId('btn-loading-icon')
    const disabledButton = getByText('Disabled Button')

    act(() => {
      loadingButton.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      )
      disabledButton.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      )
    })

    expect(loadingClick).not.toHaveBeenCalled()
    expect(disabledClick).not.toHaveBeenCalled()
  })
})
