import React from 'react'

const LoadingSpinner = ({
  color,
}: {
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'white'
}) => {
  return (
    <div
      data-testid="btn-loading-icon"
      className={`loading-spinner-nm color-${color}`}></div>
  )
}

export default LoadingSpinner
