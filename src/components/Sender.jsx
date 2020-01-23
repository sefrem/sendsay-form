import React from 'react'
import InputField from './UI/InputField'
import { connect } from 'react-redux'
import {
  updateSenderName,
  updateSenderEmail,
} from '../redux/sender/sender.actions'

const Sender = props => {
  const {
    updateSenderName,
    updateSenderEmail,
    name,
    email,
    errorName,
    errorEmail,
  } = props
  return (
    <div className="form__field-group">
      <InputField
        labelText="От кого"
        id="senderName"
        type="text"
        name="name"
        value={name}
        onChange={updateSenderName}
        placeholder="Имя"
        error={errorName}
        errorMessage="Введите имя отправителя"
      />
      <InputField
        id="senderEmail"
        type="email"
        name="email"
        value={email}
        onChange={updateSenderEmail}
        placeholder="Email"
        error={errorEmail}
        errorMessage="Некорректный email"
      />
    </div>
  )
}

const mapDispatchToProps = {
  updateSenderName,
  updateSenderEmail,
}

const mapStateToProps = state => {
  return {
    name: state.sender.name,
    email: state.sender.email,
    errorName: state.errors.input.senderName,
    errorEmail: state.errors.input.senderEmail,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sender)
