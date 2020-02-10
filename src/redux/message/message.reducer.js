import { UPDATE_MESSAGE_SUBJECT, UPDATE_MESSAGE_TEXT, CLEAR_MESSAGE } from './message.types'

const initialState = {
  subject: '',
  text: '',
}

const message = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_SUBJECT:
    case UPDATE_MESSAGE_TEXT:
      action.payload.persist()
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      }
    case CLEAR_MESSAGE:
      return {...state, ...initialState}
    default:
      return state
  }
}

export default message
