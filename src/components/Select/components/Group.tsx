import React from 'react'
import './Group.scss'

import GroupProps from './Group.types'

const Group = ({ title, children }: GroupProps) => {
  return (
    <li className="group-nm">
      <ul data-testid="select-group" role="listbox" aria-label={title}>
        <li className="title-nm">{title}</li>
        {children}
      </ul>
    </li>
  )
}

export default Group
