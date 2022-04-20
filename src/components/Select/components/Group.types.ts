import React from 'react'

interface GroupProps {
  /** The title of the group */
  title: string
  /** The options inside the group */
  children: React.ReactChild | React.ReactChild[]
}

export default GroupProps
