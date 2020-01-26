import { combineReducers } from 'redux'
import sender from './sender/sender.reducer'
import receiver from './receiver/receiver.reducer'
import message from './message/message.reducer'
import errors from './errors/errors.reducer'
import files from './files/files.reducer'
import sentMessage from './sentMessage/sentMessage.reducer'

const reducerApp = combineReducers({
  sender,
  receiver,
  message,
  errors,
  files,
  sentMessage,
})

export default reducerApp
