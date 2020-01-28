import React from 'react'

const SubmitButton = props => {
  const { value, onClick } = props
  return (
    <input
      type="submit"
      value={value}
      className="submit"
      onClick={onClick}
    ></input>
  )
}

export default SubmitButton
