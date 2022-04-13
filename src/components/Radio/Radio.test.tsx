import React from 'react'
import { act, render } from '@testing-library/react'

import { Radio } from '../../components/index'

describe('Radio Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(
      <Radio name="radio" onRadioChange={() => {}}>
        <Radio.Button id="radio-one" value="radio-one" label="One Button" />
        <Radio.Button id="radio-two" value="radio-two" label="Second Button" />
      </Radio>
    )

    expect(getByTestId('radio-wrapper')).toMatchSnapshot()
  })

  it('Can run the onRadioChange event on changes', () => {
    const onRadioChange = jest.fn()

    const { getByText } = render(
      <Radio name="radio" onRadioChange={onRadioChange}>
        <Radio.Button id="radio-one" value="radio-one" label="One Button" />
        <Radio.Button id="radio-two" value="radio-two" label="Second Button" />
      </Radio>
    )

    const label = getByText('One Button')

    act(() => {
      label.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(onRadioChange).toHaveBeenCalled()
  })

  it('Does not run onRadioChange events if disabled', () => {
    const onRadioChange = jest.fn()

    const { getByText } = render(
      <Radio name="radio" onRadioChange={onRadioChange} disabled>
        <Radio.Button id="radio-one" value="radio-one" label="One Button" />
        <Radio.Button id="radio-two" value="radio-two" label="Second Button" />
      </Radio>
    )

    const label = getByText('One Button')
    label.click()

    expect(onRadioChange).not.toHaveBeenCalled()
  })

  it('Does not run onRadioChange events when individual is disabled', () => {
    const onRadioChange = jest.fn()

    const { getByText } = render(
      <Radio name="radio" onRadioChange={onRadioChange}>
        <Radio.Button id="radio-one" value="radio-one" label="One Button" disabled />
        <Radio.Button id="radio-two" value="radio-two" label="Second Button" />
      </Radio>
    )

    const labelOne = getByText('One Button')
    labelOne.click()

    const labelTwo = getByText('Second Button')
    labelTwo.click()

    // useEffect runs on mount, so we want it to have been called twice
    expect(onRadioChange).toHaveBeenCalledTimes(2)
  })

  it('Can toggle checked / unchecked', () => {
    const { getByText, getByTestId } = render(
      <Radio name="radio" onRadioChange={() => {}}>
        <Radio.Button id="radio-one" value="radio-one" label="One Button" />
        <Radio.Button id="radio-two" value="radio-two" label="Second Button" />
      </Radio>
    )

    const label = getByText('Second Button')
    label.click()

    const input = getByTestId('radio-button-input-radio-two')
    expect(input).toBeChecked()
  })
})
