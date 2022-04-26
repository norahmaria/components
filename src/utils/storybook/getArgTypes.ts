const createArgTypesCategoryAndControls = (options: {
  [key: string]: [string, boolean?]
}) => {
  const argTypes: any = {
    className: {
      table: {
        category: 'Extra Native Props',
      },
    },
    style: {
      control: false,
      table: {
        category: 'Extra Native Props',
      },
    },
    size: {
      table: {
        category: 'Appearance',
      },
    },
    color: {
      table: {
        category: 'Appearance',
      },
    },
  }

  for (const property in options) {
    const [category, hideControls = false] = options[property]

    argTypes[property] = { table: { category } }
    if (hideControls) argTypes[property].control = false
  }

  return argTypes
}

export default createArgTypesCategoryAndControls
