import React from 'react'

const Error = props => {
  const { error, id, errorMessage } = props
  return (
    <div className="error">
      {error ? (
        <div data-error={id} className="error__message error__message_active">
          {errorMessage}
        </div>
      ) : (
        <div className="error__message error__message_hidden"></div>
      )}
    </div>
  )
}

export default Error
