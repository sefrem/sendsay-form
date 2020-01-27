import { UPDATE_SENDER_NAME, UPDATE_SENDER_EMAIL, CLEAR_SENDER } from './sender.types'

const initialState = {
  name: '',
  email: '',
}

const sender = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SENDER_NAME:
    case UPDATE_SENDER_EMAIL:
      action.payload.persist()
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      }
    case CLEAR_SENDER:
      return {...state, ...initialState}
    default:
      return state
  }
}

export default sender
