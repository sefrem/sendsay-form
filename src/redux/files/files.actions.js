import { ADD_FILES, VALIDATE_FILES, REMOVE_FILE } from '../types'

export const addFiles = payload => {
  const fileData = []

  for (let file of payload) {
    const fileInfo = {}
    fileInfo.name = file.name
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      fileInfo.content = reader.result
    }

    fileInfo.encoding = 'base64'
    fileData.push(fileInfo)
  }
  return {
    type: ADD_FILES,
    payload: fileData,
  }
}

export const validateFiles = payload => {
  return {
    type: VALIDATE_FILES,
    payload,
  }
}

export const removeFile = payload => {
  return {
    type: REMOVE_FILE,
    payload,
  }
}
