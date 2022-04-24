import React from 'react'
import { render } from '@testing-library/react'

import { Slider } from '../index'
import setValue from '../../utils/tests/setValue'

describe('Slider Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(
      <Slider label="Slider" id="Slider" onSliderChange={() => {}} />
    )

    expect(getByTestId('slider-wrapper')).toMatchSnapshot()
  })

  it('Can run onSliderChange event on changes', () => {
    const onSliderChange = jest.fn()

    const { getByTestId } = render(
      <Slider label="Slider" id="Slider" onSliderChange={onSliderChange} />
    )

    const input = getByTestId('slider-input')
    setValue(input, '30')

    expect(input).toHaveValue('30')
    expect(onSliderChange).toHaveBeenCalledTimes(1)
  })

  it('Does not run onSliderChange events if disabled', () => {
    const onSliderChange = jest.fn()

    const { getByTestId } = render(
      <Slider
        label="Slider"
        id="Slider"
        disabled
        onSliderChange={onSliderChange}
      />
    )

    const input = getByTestId('slider-input')
    setValue(input, '30')

    expect(onSliderChange).not.toHaveBeenCalled()
  })

  it('Can color the bar by percentage', () => {
    const { getByTestId } = render(
      <Slider label="Slider" id="Slider" onSliderChange={() => {}} />
    )

    const placebo = getByTestId('slider-placebo')
    const input = getByTestId('slider-input')

    setValue(input, '30')

    expect(placebo).toHaveStyle(
      'background-image: linear-gradient(90deg, hsl(250, 100%, 67%) 30%, #E7E9EB 30%)'
    )
  })
})
