import React from 'react'
import Error from '../Error/Error'
import Label from '../Label/Label'
import classNames from 'classnames'

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
      <Label id={id} labelText={labelText} />
      <input
        id={id}
        type={type}
        className={classNames('field__input', { 'field__input_error': error })}
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
