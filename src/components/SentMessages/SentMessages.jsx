import React from 'react'
import { connect } from 'react-redux'
import SentMessage from './SentMessage'
import classNames from 'classnames'

const SentMessages = props => {
  const { sentMessages } = props
  const sentMessagesExist = Object.keys(sentMessages).length

  return (
    <div className="list mt-50">
      <div className="list__header">Отправленные сообщения</div>
      <div
        className={classNames('list__item_hidden', {
          'list__item list__item_header': sentMessagesExist,
        })}
      >
        <div className="list__date">Дата</div>
        <div className="list__subject">Тема</div>
        <div className="list__status">Статус</div>
      </div>
      <div className="list__items">
        {sentMessagesExist ? (
          Object.values(sentMessages).map(message => (
            <SentMessage key={message.id} message={message} />
          ))
        ) : (
          <div>Сообщения еще не отправлялись</div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sentMessages: state.sentMessage,
  }
}

export default connect(mapStateToProps, null)(SentMessages)
