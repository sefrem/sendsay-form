import { SEND_MESSAGE } from '../types'

export const sendMessage = payload => {
  return {
    type: SEND_MESSAGE,
    payload,
  }
}
