import React from 'react'
import { connect } from 'react-redux'
import { clearAll } from '../../redux/modal/modal.actions'
import SubmitButton from '../UI/SubmitButton/SubmitButton'

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
      <SubmitButton value="ОК" onClick={props.clearAll} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    email: state.receiver.email,
  }
}

const mapDispatchToProps = {
  clearAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
