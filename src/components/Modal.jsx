import React from 'react'
import { connect } from 'react-router'

const Modal = props => {
  return (
    <div>
      <div>Сообщение поставлено в очередь на отправку</div>
      <div>
        Совсем скоро сообщение вылетит из сервера и будет двигаться в сторону
        почты получателя {email} со скоростью электронов
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        
    }
  }

export default connect(mapStateToProps, null)(Modal)


