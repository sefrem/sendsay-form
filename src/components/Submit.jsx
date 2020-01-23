import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../redux/sendMessage/sendMessage.actions'

const Submit = props => {
  const onSubmit = () => {
    const { sendMessage } = props
    sendMessage()
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
  sendMessage,
}

export default connect(null, mapDispatchToProps)(Submit)
