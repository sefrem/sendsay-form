import React from 'react'
import { connect } from 'react-redux'
import { updateMessageStatus } from '../../redux/sentMessage/sentMessage.actions'
import SentMessage from './SentMessage'

const SentMessages = props => {
  const { sentMessages } = props

  return (
    <div>
      {/* {sentMessages ? 
        for (const message in  sentMessages){
          return <SentMessage message={message} />
        }
      ) : (
        <div>Сообщений пока нет</div>
      )} */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sentMessages: state.sentMessage,
  }
}

export default connect(mapStateToProps, null)(SentMessages)
