import React from 'react'
import { connect } from 'react-router';
import Sender from './Sender'
import Receiver from './Receiver'
import Message from './Message'
import Submit from './Submit'
import DragDrop from './DragDrop/DragDrop'
import FileInput from './FileInput'
import AttachedFiles from './AttachedFiles'

const Form = props => {
  return (
    <div className="form">
      <div className="form__content-wrapper">
         { <Modal />
        <DragDrop>
          <div className="form__header">Отправлялка сообщений</div>
          <Sender />
          <Receiver />
          <Message />
          <AttachedFiles />
          <FileInput />
          <Submit />
        </DragDrop>
}
      </div>
    </div>
  )
}

  
  const mapStateToProps = state => {
    return {

    }
  }
  
  export default connect(mapStateToProps, null)(Form)

