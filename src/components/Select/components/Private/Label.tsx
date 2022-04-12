import React from 'react'
import LabelProps from './Label.types'

const Label = ({ label, children, multiple, selected }: LabelProps) => {
  return (
    <div className="label">
      {selected.length ? (
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const { children, value, title } = child.props

            if (title) {
              return React.Children.map(children, nested => {
                if (selected.includes(nested.props.value))
                  return (
                    <div className={multiple ? 'tag' : 'selected'}>
                      {nested.props.children}
                    </div>
                  )
              })
            } else if (selected.includes(value)) {
              return <div className={multiple ? 'tag' : 'selected'}>{children}</div>
            }
          }
        })
      ) : (
        <div className="placeholder">{label}</div>
      )}
    </div>
  )
}

export default Label
