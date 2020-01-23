import { SEND_MESSAGE } from '../types'

const sendMessage = (state = null, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      console.log('sending the message')
      return null
    default:
      return state
  }
}

export default sendMessage
