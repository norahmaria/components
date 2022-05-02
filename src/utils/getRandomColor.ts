const getRandomColor = () => {
  const colors = ['primary', 'success', 'error', 'warning', 'neutral']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default getRandomColor
