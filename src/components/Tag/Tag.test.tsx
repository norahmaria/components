import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { Tag } from '../../components/index'

describe('Tag Component', () => {
  it('Can render', () => {
    const { getByTestId } = render(<Tag>Hello World</Tag>)

    expect(getByTestId('tag')).toMatchSnapshot()
  })

  it('Can toggle click class', async () => {
    const { getByTestId } = render(
      <Tag onClick={() => {}}>Hello World</Tag>
    )
    const tag = getByTestId('tag')

    tag.click()
    expect(tag).toHaveClass('clicked-true')

    await waitFor(() => {
      expect(tag).not.toHaveClass('clicked-true')
    })
  })

  it('Can render close icon', () => {
    const { getByTestId } = render(
      <Tag onDelete={() => {}}>Hello World</Tag>
    )

    const closeIcon = getByTestId('close-icon')
    expect(closeIcon).toBeInTheDocument()
  })
})
