import { DISPLAY_INPUT_ERRORS, DISPLAY_FILE_ERRORS } from '../types'

export const displayInputErrors = payload => {
  return {
    type: DISPLAY_INPUT_ERRORS,
    payload,
  }
}

export const displayFileErrors = payload => {
  return {
    type: DISPLAY_FILE_ERRORS,
    payload,
  }
}
