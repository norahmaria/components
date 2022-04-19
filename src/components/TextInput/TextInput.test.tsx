import React from 'react'
import { render, act } from '@testing-library/react'

import { TextInput } from '../../components/index'

describe('TextInput Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(
      <TextInput
        label="Label"
        id="id"
        placeholder="Placeholder.."
        onTextInputChange={() => {}}
      />
    )

    expect(getByTestId('text-input-wrapper')).toMatchSnapshot()
  })

  it('Can pass style props', () => {
    const { getByTestId } = render(
      <TextInput
        label="Label"
        id="id"
        placeholder="Placeholder.."
        onTextInputChange={() => {}}
        color="success"
        size="small"
        round={true}
      />
    )

    const wrapper = getByTestId('text-input-wrapper')

    expect(wrapper).toHaveClass('size-small')
    expect(wrapper).toHaveClass('color-success')
    expect(wrapper).toHaveClass('round-true')
  })

  it('Can run onTextInput change when input changes', () => {
    const onTextInputChange = jest.fn()

    const { getByTestId } = render(
      <TextInput
        label="Label"
        id="id"
        placeholder="Placeholder.."
        onTextInputChange={onTextInputChange}
        color="success"
        size="small"
        round={true}
      />
    )

    const input = getByTestId('text-input')
    const value = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set

    for (let i = 0; i <= value.length; i++) {
      nativeInputValueSetter.call(input, value[i])

      act(() => {
        input.dispatchEvent(new Event('input', { bubbles: true }))
      })
    }

    expect(onTextInputChange).toHaveBeenCalledTimes(11)
  })

  it('Displays proper value', () => {
    const onTextInputChange = jest.fn()

    const { getByTestId } = render(
      <TextInput
        label="Label"
        id="id"
        placeholder="Placeholder.."
        onTextInputChange={onTextInputChange}
        color="success"
        size="small"
        round={true}
      />
    )

    const input = getByTestId('text-input')
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set

    nativeInputValueSetter.call(input, 'Hello World')

    act(() => {
      input.dispatchEvent(new Event('input', { bubbles: true }))
    })

    expect(input).toHaveValue('Hello World')
  })

  it('Can limit length with characterLimit', () => {
    const onTextInputChange = jest.fn()
    const { getByTestId } = render(
      <TextInput
        label="Label"
        id="id"
        placeholder="Placeholder.."
        onTextInputChange={onTextInputChange}
        characterLimit={3}
      />
    )

    const input = getByTestId('text-input')

    const string = ['H', 'e', 'l', 'l', 'o']
    const value: string[] = []

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set

    for (let i = 0; i < string.length; i++) {
      value.push(string[i])
      nativeInputValueSetter.call(input, value.join(''))

      act(() => {
        input.dispatchEvent(new Event('input', { bubbles: true }))
      })
    }

    expect(onTextInputChange).toHaveBeenLastCalledWith('Hel', expect.objectContaining({}))
  })
})
