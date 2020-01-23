import { DISPLAY_INPUT_ERRORS, DISPLAY_FILE_ERRORS } from '../types'

const initialState = {
  input: {
    senderName: '',
    senderEmail: '',
    receiverName: '',
    receiverEmail: '',
    subject: '',
    message: '',
  },
  files: {
    type: '',
    singleFileSize: '',
    totalFilesSize: '',
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
