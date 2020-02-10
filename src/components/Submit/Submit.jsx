import React from 'react'
import { connect } from 'react-redux'
import { submitMessage } from '../../redux/sentMessage/sentMessage.actions'
import classnames from 'classnames'

const Submit = props => {
  const { submitMessage, submitButtonState } = props

  const onSubmit = () => {
    submitMessage()
  }

  return (
    <button
      type="Submit"
      className={classnames('submit', { 'submit_disabled': !submitButtonState })}
      onClick={onSubmit}
      disabled={submitButtonState ? false : true}
    >
      Отправить
    </button>
  )
}

const mapStateToProps = state => {
  return { submitButtonState: state.submitButton }
}

const mapDispatchToProps = {
  submitMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit)
