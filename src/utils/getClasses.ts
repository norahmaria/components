import React from 'react'

const className = (name: string, props?: any) => {
  const classes = [`${name}-nm`]

  for (const prop in props) {
    if (
      typeof props[prop] === 'boolean' ||
      prop === 'size' ||
      prop === 'color' ||
      prop === 'variant'
    ) {
      classes.push(`${prop}-${props[prop]}`)
    } else {
      classes.push(props[prop])
    }
  }

  return classes.join(' ')
}

export default className
