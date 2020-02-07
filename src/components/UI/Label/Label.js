import React from 'react'

const Label = props => {
  const { id, labelText } = props
  return (
    <div>
      <label className="label" htmlFor={id}>
        {labelText}
      </label>
    </div>
  )
}

export default Label
