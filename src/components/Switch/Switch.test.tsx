import React from 'react'
import { render } from '@testing-library/react'

import { Switch } from '../index'

describe('Switch Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(
      <Switch label="Switch" id="Switch" onSwitchChange={() => {}} />
    )

    expect(getByTestId('switch-wrapper')).toMatchSnapshot()
  })

  it('Can run the onSwitchChange event on changes', () => {
    const onSwitchChange = jest.fn()

    const { getByTestId } = render(
      <Switch label="Switch" id="Switch" onSwitchChange={onSwitchChange} />
    )

    const label = getByTestId('switch-wrapper')
    label.click()

    expect(onSwitchChange).toHaveBeenCalled()
  })

  it('Does not run onSwitchChange events if disabled', () => {
    const onSwitchChange = jest.fn()

    const { getByTestId } = render(
      <Switch
        label="Switch"
        id="Switch"
        disabled={true}
        onSwitchChange={onSwitchChange}
      />
    )

    const label = getByTestId('switch-wrapper')
    label.click()

    expect(onSwitchChange).not.toHaveBeenCalled()
  })

  it('Can toggle checked / unchecked', () => {
    const { getByTestId } = render(
      <Switch label="Switch" id="Switch" onSwitchChange={() => {}} />
    )

    const label = getByTestId('switch-wrapper')
    label.click()

    const input = getByTestId('switch-input')
    expect(input).toBeChecked()
  })
})
