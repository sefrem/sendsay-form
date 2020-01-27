import React from 'react'
import { connect } from 'react-redux'
import { clearAll } from '../redux/modal/modal.actions'


const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__header">Сообщение поставлено в очередь на отправку</div>
      <div className="modal__message">
        Совсем скоро сообщение вылетит из сервера и будет двигаться в сторону
        почты получателя {props.email} со скоростью электронов
      </div>
      <input
        type="submit"
        value="ОК"
        className="form__submit"
        onClick={props.clearAll}
      ></input>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    email: state.receiver.email,
  }
}

const mapDispatchToProps = {
  clearAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
