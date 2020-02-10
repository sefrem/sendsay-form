import React from 'react'
import Error from '../Error/Error'
import Label from '../Label/Label'
import classNames from 'classnames'

const TextareaField = props => {
  const {
    labelText,
    id,
    type,
    name,
    value,
    onChange,
    error,
    errorMessage,
  } = props

  return (
    <div>
      <Label id={id} labelText={labelText} />
      <textarea
        className={classNames('message__text', { 'message__text_error': error })}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
      <Error error={error} id={id} errorMessage={errorMessage} />
    </div>
  )
}

export default TextareaField
