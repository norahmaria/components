import React from 'react'
import { render } from '@testing-library/react'

import { TextInput } from '../../components/index'

describe('TextInput Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(<TextInput />)

    expect(getByTestId('text-input-wrapper')).toMatchSnapshot()
  })
})
