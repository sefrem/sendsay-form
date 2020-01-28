import React from 'react'
import { connect } from 'react-redux'
import { submitMessage } from '../redux/sentMessage/sentMessage.actions'
import SubmitButton from '../components/UI/SubmitButton'

const Submit = props => {
  const onSubmit = () => {
    const { submitMessage } = props
    submitMessage()
  }

  return <SubmitButton value="Отправить" onClick={onSubmit} />
}

const mapDispatchToProps = {
  submitMessage,
}

export default connect(null, mapDispatchToProps)(Submit)
