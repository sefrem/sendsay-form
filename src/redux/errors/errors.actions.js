import * as types from './errors.types'

export const displayInputErrors = payload => {
  return {
    type: types.DISPLAY_INPUT_ERRORS,
    payload,
  }
}

export const displayFileErrors = payload => {
  return {
    type: types.DISPLAY_FILE_ERRORS,
    payload,
  }
}
