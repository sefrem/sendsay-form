import React from 'react'

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
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        className={error ? 'form__input form__input_error' : 'form__input'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <div
          data-error={id}
          className="form__error-message form__error-message_active"
        >
          {errorMessage}
        </div>
      ) : (
        <div className="form__error-message form__error-message_hidden"></div>
      )}
    </div>
  )
}

export default Field
