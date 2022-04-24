import React from 'react'
import { render, act } from '@testing-library/react'

import { TextInput } from '../../components/index'
import setValue from '../../utils/tests/setValue'

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

    setValue(input, value)
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
    setValue(input, 'Hello World')

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

    setValue(input, ['H', 'e', 'l', 'l', 'o'])

    const string = ['H', 'e', 'l', 'l', 'o']
    const value: string[] = []

    for (let i = 0; i < 3; i++) {
      value.push(string[i])
      setValue(input, value.join(''))
    }

    expect(onTextInputChange).toHaveBeenLastCalledWith(
      'Hel',
      expect.objectContaining({})
    )
  })
})
