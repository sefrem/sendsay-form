import React from 'react'

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
      <label className="form__label" htmlFor={id}>
        {labelText}
      </label>
      <textarea
        className={
          error
            ? 'form__message-text form__message-text_error'
            : 'form__message-text'
        }
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
      {error ? (
        <div className="form__error-message form__error-message_active">
          {errorMessage}
        </div>
      ) : (
        <div className="form__error-message form__error-message_hidden"></div>
      )}
    </div>
  )
}

export default TextareaField
