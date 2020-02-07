import React from 'react'
import { connect } from 'react-redux'
import Sender from '../Sender&Receiver/Sender'
import Receiver from '../Sender&Receiver/Receiver'
import Message from '../Message/Message'
import Submit from '../Submit/Submit'
import DragDrop from '../DragDrop/DragDrop'
import FileInput from '../FileInput/FileInput'
import Modal from '../Modal/Modal'
import Attachement from '../Attachement/Attachement'

const Form = props => {
  return (
    <div className="form mt-20">
      <div className="form__content-wrapper">
        {props.modalState ? (
          <Modal />
        ) : (
          <DragDrop>
            <div className="header">Отправлялка сообщений</div>
            <Sender />
            <Receiver />
            <Message />
            <Attachement />
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
