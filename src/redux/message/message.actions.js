import { UPDATE_MESSAGE_SUBJECT, UPDATE_MESSAGE_TEXT } from '../types'

export const updateMessageSubject = payload => {
  return {
    type: UPDATE_MESSAGE_SUBJECT,
    payload,
  }
}

export const updateMessageText = payload => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    payload,
  }
}
