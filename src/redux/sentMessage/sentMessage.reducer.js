import {
  SUBMIT_MESSAGE,
  ADD_TO_SENT,
  UPDATE_MESSAGE_STATUS,
  UPDATE__STATUS,
} from './sentMessage.types'

const sentMessage = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
    case UPDATE_MESSAGE_STATUS:
      return state
    case ADD_TO_SENT:
      const newState = {
        [action.payload.id]: {
        id: action.payload.id,
        subject: action.payload.subject,
        date: action.payload.date,
        status: null,
      }}
      return {...state, ...newState}
    case UPDATE__STATUS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          status: +action.payload.status,
        },
      }
    default:
      return state
  }
}

export default sentMessage
