const hideControls = (properties: string[]) => {
  const hiddenProperties: any = {}

  for (const property of properties) {
    hiddenProperties[property] = {
      control: false,
      table: {
        disable: true,
      },
    }
  }

  return hiddenProperties
}

export default hideControls
