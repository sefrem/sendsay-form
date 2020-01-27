import { DISPLAY_INPUT_ERRORS, DISPLAY_FILE_ERRORS } from './errors.types'

const initialState = {
  input: {
    senderName: false,
    senderEmail: false,
    receiverName: false,
    receiverEmail: false,
    subject: false,
    message: false,
  },
  files: {
    type: false,
    singleFileSize: false,
    totalFilesSize: false,
  },
}

const errors = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_INPUT_ERRORS:
    case DISPLAY_FILE_ERRORS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default errors
