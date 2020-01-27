import * as types from './sender.types'

export const updateSenderName = payload => {
  return {
    type: types.UPDATE_SENDER_NAME,
    payload,
  }
}

export const updateSenderEmail = payload => {
  return {
    type: types.UPDATE_SENDER_EMAIL,
    payload,
  }
}

export const clearSender = () => {
  return {
    type: types.CLEAR_SENDER,
  }
}
