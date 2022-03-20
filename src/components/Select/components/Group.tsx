import React from 'react'
import './Group.scss'

import GroupProps from '../components/Group.types'

const Group = ({ title, ...props }: GroupProps) => {
  return (
    <ul className="group" data-testid="select-group" {...props}>
      <div className="title">{title}</div>
      {props.children}
    </ul>
  )
}

export default Group
