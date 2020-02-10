import React from 'react'
import { connect } from 'react-redux'

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__header">
        Сообщение поставлено в очередь на отправку
      </div>
      <div className="modal__message">
        Совсем скоро сообщение вылетит из сервера и будет двигаться в сторону
        почты получателя {props.email} со скоростью электронов
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    email: state.receiver.email,
  }
}


export default connect(mapStateToProps, null)(Modal)
