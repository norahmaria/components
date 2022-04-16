import React from 'react'
import { render } from '@testing-library/react'

import { TextInput } from '../../components/index'

describe.only('TextInput Component', () => {
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
})
