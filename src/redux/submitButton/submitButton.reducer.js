import { TOGGLE_SUBMIT_BUTTON } from './submitButton.types'

const submitButton = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_SUBMIT_BUTTON:
      return !state
    default:
      return state
  }
}

export default submitButton