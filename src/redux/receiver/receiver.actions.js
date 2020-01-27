import * as types from './receiver.types'

export const updateReceiverName = payload => {
  return {
    type: types.UPDATE_RECEIVER_NAME,
    payload,
  }
}

export const updateReceiverEmail = payload => {
  return {
    type: types.UPDATE_RECEIVER_EMAIL,
    payload,
  }
}

export const clearReceiver = () => {
  return {
    type: types.CLEAR_RECEIVER,
  }
}
