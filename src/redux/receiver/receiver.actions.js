import { UPDATE_RECEIVER_NAME, UPDATE_RECEIVER_EMAIL } from '../types'

export const updateReceiverName = payload => {
  return {
    type: UPDATE_RECEIVER_NAME,
    payload,
  }
}

export const updateReceiverEmail = payload => {
  return {
    type: UPDATE_RECEIVER_EMAIL,
    payload,
  }
}
