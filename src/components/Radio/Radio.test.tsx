import React from 'react'
import { act, render, waitFor } from '@testing-library/react'

import { Radio } from '../../components/index'

describe('Radio Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(
      <Radio label="Radio" id="radio" onRadioChange={() => {}} />
    )

    expect(getByTestId('radio-wrapper')).toMatchSnapshot()
  })

  it('Can run the onRadioChange event on changes', () => {
    const onRadioChange = jest.fn()

    const { getByTestId } = render(
      <Radio label="Radio" id="radio" onRadioChange={onRadioChange} />
    )

    const label = getByTestId('radio-label')
    label.click()

    expect(onRadioChange).toHaveBeenCalled()
  })

  it('Does not run onRadioChange events if disabled', () => {
    const onRadioChange = jest.fn()

    const { getByTestId } = render(
      <Radio
        label="Radio"
        id="radio"
        disabled={true}
        onRadioChange={onRadioChange}
      />
    )

    const label = getByTestId('radio-label')
    label.click()

    expect(onRadioChange).not.toHaveBeenCalled()
  })

  it('Can toggle checked / unchecked', () => {
    const { getByTestId } = render(
      <Radio label="Radio" id="radio" onRadioChange={() => {}} />
    )

    const label = getByTestId('radio-label')
    label.click()

    const input = getByTestId('radio-input')
    expect(input).toBeChecked()
  })
})
