import { act } from '@testing-library/react'

const setValue = (input: HTMLElement, value: string | string[]) => {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set

  nativeInputValueSetter.call(input, value)

  if (Array.isArray(value)) {
    for (let i = 0; i <= value.length; i++) {
      nativeInputValueSetter.call(input, value[i])

      act(() => {
        input.dispatchEvent(new Event('input', { bubbles: true }))
      })
    }
  } else {
    act(() => {
      input.dispatchEvent(new Event('input', { bubbles: true }))
    })
  }
}

export default setValue
