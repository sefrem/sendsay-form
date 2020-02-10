import React from 'react'
import InputField from '../UI/InputField/InputField'
import TextareaField from '../UI/TextareaField/TextareaField'
import { connect } from 'react-redux'
import {
  updateMessageSubject,
  updateMessageText,
} from '../../redux/message/message.actions'

const Message = props => {
  const {
    updateMessageSubject,
    updateMessageText,
    subject,
    text,
    errorSubject,
    errorText,
  } = props
  return (
    <div>
      <div className="mb-20">
        <InputField
          labelText="Тема письма"
          id="subject"
          type="text"
          name="subject"
          value={subject}
          onChange={updateMessageSubject}
          error={errorSubject}
          errorMessage="Заполните тему"
        />
      </div>
      <TextareaField
        labelText="Сообщение"
        id="text"
        type="text"
        name="text"
        value={text}
        onChange={updateMessageText}
        error={errorText}
        errorMessage="Введите текст"
      />
    </div>
  )
}

const mapDispatchToProps = {
  updateMessageSubject,
  updateMessageText,
}

const mapStateToProps = state => {
  return {
    subject: state.message.subject,
    text: state.message.text,
    errorSubject: state.errors.input.subject,
    errorText: state.errors.input.text,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
