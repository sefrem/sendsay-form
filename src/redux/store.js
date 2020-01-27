import { createStore, applyMiddleware } from 'redux'
import reducerApp from './rootReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import inputValidationMiddleware from '../middleware/inputValidationMiddleware'
import filesValidationMiddleware from '../middleware/filesValidationMiddleware'
import submitMessageMiddleware from '../middleware/submitMessageMiddleware'
import statusUpdateMiddleware from '../middleware/statusUpdateMiddleware'

const store = createStore(
  reducerApp,
  composeWithDevTools(
    applyMiddleware(
      inputValidationMiddleware,
      filesValidationMiddleware,
      submitMessageMiddleware,
      statusUpdateMiddleware,
      thunk
    )
  )
)

export default store
