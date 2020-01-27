import * as types from './modal.types'
import { clearAttachedFiles } from '../files/files.actions'
import { clearMessage } from '../message/message.actions'
import { clearReceiver } from '../receiver/receiver.actions'
import { clearSender } from '../sender/sender.actions'

export const toggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  }
}

export const clearAll = () => dispatch => {
  dispatch(clearAttachedFiles())
  dispatch(toggleModal())
  dispatch(clearMessage())
  dispatch(clearReceiver())
  dispatch(clearSender())
}
