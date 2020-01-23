import { ADD_FILES, VALIDATE_FILES, REMOVE_FILE } from '../types'

const files = (state = [], action) => {
  switch (action.type) {
    case VALIDATE_FILES:
      return state
    case ADD_FILES:
      return [...state, ...action.payload]
    case REMOVE_FILE:
      const newState = state.filter(file => file.name !== action.payload)
      return newState
    default:
      return state
  }
}

export default files
