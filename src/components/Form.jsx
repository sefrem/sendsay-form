import React from 'react'
import { connect } from 'react-redux'
import Sender from './Sender'
import Receiver from './Receiver'
import Message from './Message'
import Submit from './Submit'
import DragDrop from './DragDrop/DragDrop'
import FileInput from './FileInput'
import AttachedFiles from './AttachedFiles'
import Modal from './Modal'

const Form = props => {
  return (
    <div className="form">
      <div className="form__content-wrapper">
        {props.modalState ? (
          <Modal />
        ) : (
          <DragDrop>
            <div className="header">Отправлялка сообщений</div>
            <Sender />
            <Receiver />
            <Message />
            <AttachedFiles />
            <FileInput />
            <Submit />
          </DragDrop>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    modalState: state.modal,
  }
}

export default connect(mapStateToProps, null)(Form)
