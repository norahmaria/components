import React from 'react'
import './Group.scss'

import GroupProps from '../components/Group.types'

const Group = ({ title, ...props }: GroupProps) => {
  return (
    <li className="group" {...props}>
      <ul data-testid="select-group">
        <li className="title">{title}</li>
        {props.children}
      </ul>
    </li>
  )
}

export default Group
