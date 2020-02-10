import * as types  from './message.types'

export const updateMessageSubject = payload => {
  return {
    type: types.UPDATE_MESSAGE_SUBJECT,
    payload,
  }
}

export const updateMessageText = payload => {
  return {
    type: types.UPDATE_MESSAGE_TEXT,
    payload,
  }
}

export const clearMessage = () => {
  return {
    type: types.CLEAR_MESSAGE,
  }
}