import { combineReducers } from 'redux'
import sender from './sender/sender.reducer'
import receiver from './receiver/receiver.reducer'
import message from './message/message.reducer'
import errors from './errors/errors.reducer'
import attachedFiles from './attachedFiles/attachedFiles.reducer'
import sentMessage from './sentMessage/sentMessage.reducer'
import modal from './modal/modal.reducer'
import submitButton from './submitButton/submitButton.reducer'

const reducerApp = combineReducers({
  sender,
  receiver,
  message,
  errors,
  attachedFiles,
  sentMessage,
  modal,
  submitButton
})

export default reducerApp
