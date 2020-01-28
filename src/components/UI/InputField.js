import React from 'react'
import Error from './Error'

const Field = props => {
  const {
    labelText,
    id,
    type,
    name,
    value,
    onChange,
    placeholder,
    error,
    errorMessage,
  } = props
  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        className={error ? 'field__input field__input_error' : 'field__input'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Error error={error} id={id} errorMessage={errorMessage} />
    </div>
  )
}

export default Field
