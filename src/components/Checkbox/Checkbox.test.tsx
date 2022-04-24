import React from 'react'
import { act, render, waitFor } from '@testing-library/react'

import { Checkbox } from '../../components/index'

describe('Checkbox Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(
      <Checkbox
        label="Checkbox"
        id="checkbox"
        onCheckboxChange={() => {}}
      />
    )

    expect(getByTestId('checkbox-wrapper')).toMatchSnapshot()
  })

  it('Can run the onCheckboxChange event on changes', () => {
    const onCheckboxChange = jest.fn()

    const { getByTestId } = render(
      <Checkbox
        label="Checkbox"
        id="checkbox"
        onCheckboxChange={onCheckboxChange}
      />
    )

    const label = getByTestId('checkbox-label')
    label.click()

    expect(onCheckboxChange).toHaveBeenCalled()
  })

  it('Does not run onCheckboxChange events if disabled', () => {
    const onCheckboxChange = jest.fn()

    const { getByTestId } = render(
      <Checkbox
        label="Checkbox"
        id="checkbox"
        disabled={true}
        onCheckboxChange={onCheckboxChange}
      />
    )

    const label = getByTestId('checkbox-label')
    label.click()

    expect(onCheckboxChange).not.toHaveBeenCalled()
  })

  it('Can toggle checked / unchecked', () => {
    const { getByTestId } = render(
      <Checkbox
        label="Checkbox"
        id="checkbox"
        onCheckboxChange={() => {}}
      />
    )

    const label = getByTestId('checkbox-label')
    label.click()

    const input = getByTestId('checkbox-input')
    expect(input).toBeChecked()
  })
})
