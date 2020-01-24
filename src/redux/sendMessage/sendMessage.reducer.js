import { MESSAGE_SENT, ADD_TO_SENT } from '../types'

const sentMessage = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_SENT:
      console.log('sending the message')
      return state
    case ADD_TO_SENT:
        console.log(action.payload)
      return [...state, action.payload]
    default:
      return state
  }
}

export default sentMessage
