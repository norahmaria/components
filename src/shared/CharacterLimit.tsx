import React from 'react'

const CharacterLimit = ({
  value,
  characterLimit,
}: {
  value: string
  characterLimit: number
}) => {
  return (
    <div className="character-limit-nm">
      <p className="character-count-nm">{value.length}</p> /{' '}
      <p className="character-limit-count-nm">{characterLimit}</p>
    </div>
  )
}

export default CharacterLimit
