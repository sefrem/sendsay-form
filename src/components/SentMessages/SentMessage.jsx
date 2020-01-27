import React from 'react'
import { connect } from 'react-redux'
import { updateMessageStatus } from '../../redux/sentMessage/sentMessage.actions'
import { useEffect } from 'react'
import classnames from 'classnames'

const SentMessage = props => {
  const { id, date, subject, status } = props.message
  const { updateMessageStatus } = props
  let statusMessage

  if (status === -1) {
    statusMessage = 'Отправлено'
  }
  if (status > -1) {
    statusMessage = 'В очереди'
  }

  if (status < -1) {
    statusMessage = 'Ошибка'
  }
  useEffect(() => {
    if (status > -1) {
      let timer = setInterval(() => {
        updateMessageStatus(id)
      }, 5000)
      return () => {
        clearInterval(timer)
      }
    }
  })
  return (
    <div className="list__item">
      <div className="list__item-date">{date}</div>
      <div className="list__item-subject">{subject}</div>
      <div
        className={classnames(
          'list__item-status',
          { 'list__item-status_success': status === -1 },
          { 'list__item-status_pending': status > -1 },
          { 'list__item-status_error': status < -1 }
        )}
      >
        {statusMessage}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  updateMessageStatus,
}

export default connect(null, mapDispatchToProps)(SentMessage)
