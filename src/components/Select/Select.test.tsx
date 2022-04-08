import React from 'react'
import { render, act } from '@testing-library/react'

import { Select } from '../../components/index'

type Props = {
  multiple?: boolean
  disabled?: boolean
  disableFirstOption?: boolean
  status?: { type: 'error' | 'warning'; message: string }
  onSelectionChange?: () => void
} | null

const base = ({
  multiple = false,
  disabled = false,
  disableFirstOption = false,
  onSelectionChange = () => {},
  status,
}: Props) => (
  <Select
    status={status}
    multiple={multiple}
    disabled={disabled}
    label="Country"
    onSelectionChange={onSelectionChange}
  >
    <Select.Option disabled={disableFirstOption} value="us">
      United States
    </Select.Option>

    <Select.Group title="Scandinavia">
      <Select.Option value="no">Norway</Select.Option>
      <Select.Option value="se">Sweden</Select.Option>
    </Select.Group>
  </Select>
)

describe('Select Component', () => {
  it('Can render correctly, closed and open', () => {
    const { getByTestId } = render(base({}))

    const select = getByTestId('select')
    expect(select).toMatchSnapshot()

    select.click()
    expect(select).toMatchSnapshot()
  })

  it('Can open select options', () => {
    const { getByRole, getAllByRole } = render(base({}))

    const [toggleButton] = getAllByRole('button')
    const options = getByRole('listbox')

    expect(toggleButton).not.toHaveClass('open-true')
    expect(toggleButton).not.toHaveAttribute('aria-expanded', 'true')

    toggleButton.click()

    expect(toggleButton).toHaveClass('open-true')
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    expect(options).toHaveClass('open-true')
  })

  it('Groups options properly', () => {
    const { getByTestId } = render(base({}))

    expect(getByTestId('select-group').children).toHaveLength(3)

    expect(getByTestId('select-group').children[0]).toHaveTextContent(
      'Scandinavia'
    )
    expect(getByTestId('select-group').children[1]).toHaveTextContent('Norway')
    expect(getByTestId('select-group').children[2]).toHaveTextContent('Sweden')
  })

  it('Can select single', () => {
    const { getAllByRole } = render(base({}))

    const [toggleButton] = getAllByRole('button')
    const [firstOption] = getAllByRole('option')

    toggleButton.click()
    firstOption.click()

    expect(toggleButton).toHaveTextContent('United States')
  })

  it('Can select multiple', () => {
    const { getAllByRole } = render(base({ multiple: true }))

    const [toggleButton] = getAllByRole('button')
    const [firstOption, secondOption] = getAllByRole('option')

    toggleButton.click()
    firstOption.click()
    secondOption.click()

    expect(toggleButton).toHaveTextContent('United States')
    expect(toggleButton).toHaveTextContent('Norway')
  })

  it('Can disable select', () => {
    const onClick = jest.fn()

    const { getAllByRole } = render(base({ disabled: true }))

    const [toggleButton] = getAllByRole('button')
    toggleButton.onclick = onClick

    expect(toggleButton).toBeDisabled()

    toggleButton.click()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('Can disable individual options', () => {
    const { getAllByRole } = render(base({ disableFirstOption: true }))

    const [toggleButton] = getAllByRole('button')
    const [disabledOption] = getAllByRole('option')

    toggleButton.click()

    expect(disabledOption).toHaveAttribute('aria-disabled', 'true')
    expect(disabledOption.tabIndex).toEqual(-1)

    disabledOption.click()
    expect(toggleButton).not.toHaveTextContent('United States')
  })

  it('Can clear selected', () => {
    const { getByTestId, getAllByRole } = render(base({}))

    const [toggleButton] = getAllByRole('button')
    const firstOption = getAllByRole('option')[0]

    toggleButton.click()
    firstOption.click()

    expect(toggleButton).toHaveTextContent('United States')

    const clearIcon = getByTestId('close-icon')
    expect(clearIcon).toBeInTheDocument()

    act(() => {
      clearIcon.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(toggleButton).toHaveTextContent('Country')
    expect(toggleButton).not.toHaveTextContent('United States')
  })

  it('Displays status messages', () => {
    const { getByText, getByTestId } = render(
      base({ status: { type: 'error', message: 'Must select one' } })
    )

    const status = getByText('Must select one')
    const select = getByTestId('select')

    expect(status).toHaveClass('status')
    expect(select).toHaveClass('error')
  })

  it('Runs onSelectionChange when selection changes', () => {
    const onSelectionChange = jest.fn()

    const { getAllByRole, getByTestId } = render(base({ onSelectionChange }))

    const [toggleButton] = getAllByRole('button')
    toggleButton.click()

    const [firstOption, secondOption] = getAllByRole('option')
    firstOption.click()
    secondOption.click()

    const clearIcon = getByTestId('close-icon')

    act(() => {
      clearIcon.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(onSelectionChange).toBeCalledTimes(4)
  })
})
