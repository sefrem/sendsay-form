import update from 'immutability-helper'

import {
  ADD_FILES,
  VALIDATE_FILES,
  REMOVE_FILE,
  CLEAR_FILES,
} from './attachedFiles.types'

const initialState = {
  files: [],
  totalSize: null,
}

const attachedFiles = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_FILES:
      return state
    case ADD_FILES:
      let addTotalSize = state.totalSize
      action.payload.forEach(item => (addTotalSize += item.size))
      const addFilesState = {
        files: update(state.files, { $push: action.payload }),
        totalSize: addTotalSize,
      }
      return { ...state, ...addFilesState }
    case REMOVE_FILE:
      const removeFilesState = state.files.filter(
        file => file.name !== action.payload.name
      )
      let substractTotalSize = null
      removeFilesState.forEach(file => (substractTotalSize += file.size))
      const newState = {
        files: update(state.files, { $set: removeFilesState }),
        totalSize: substractTotalSize,
      }
      return { ...state, ...newState }
    case CLEAR_FILES:
      return { ...state, ...initialState }
    default:
      return state
  }
}

export default attachedFiles
