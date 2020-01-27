import React from 'react'
import { connect } from 'react-redux'
import { submitMessage } from '../redux/sentMessage/sentMessage.actions'

const Submit = props => {
  const onSubmit = () => {
    const { submitMessage } = props
    submitMessage()
  }

  return (
    <input
      type="submit"
      value="Отправить"
      className="form__submit"
      onClick={onSubmit}
    ></input>
  )
}

const mapDispatchToProps = {
  submitMessage,
}

export default connect(null, mapDispatchToProps)(Submit)
