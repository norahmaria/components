import React from 'react'
import './Group.scss'

import GroupProps from './Group.types'

const Group = ({ title, children }: GroupProps) => {
  return (
    <li className="select-nm__group">
      <ul data-testid="select-group" role="listbox" aria-label={title}>
        <li className="select-nm__title">{title}</li>
        {children}
      </ul>
    </li>
  )
}

export default Group
