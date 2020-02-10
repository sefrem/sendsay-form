import React from 'react'

const Label = props => {
  const { id, labelText } = props
  return (
    <div>
      <label className="label mb-5" htmlFor={id}>
        {labelText}
      </label>
    </div>
  )
}

export default Label
