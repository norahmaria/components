import React from 'react'
import './Group.scss'

import { ReactComponent as LineArrow } from '../../../assets/Arrow_Line.svg'
import GroupProps from '../components/Group.types'

const Group: React.FC<GroupProps> = ({ title, ...props }) => {
  return (
    <ul className="group" {...props}>
      <div className="title">
        {/* <LineArrow /> */}
        {title}
      </div>
      {props.children}
    </ul>
  )
}

export default Group
