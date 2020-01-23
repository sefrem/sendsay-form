import { createStore, applyMiddleware } from 'redux'
import reducerApp from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import inputValidationMiddleware from '../middleware/inputValidationMiddleware'
import filesValidationMiddleware from '../middleware/filesValidationMiddleware'
import apiMiddleware from '../middleware/apiMiddleware'

const store = createStore(
  reducerApp,
  composeWithDevTools(
    applyMiddleware(
      inputValidationMiddleware,
      filesValidationMiddleware,
      apiMiddleware
    )
  )
)

export default store
