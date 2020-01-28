import { ADD_FILES, VALIDATE_FILES, REMOVE_FILE, CLEAR_FILES } from './files.types'

export const addFiles = payload => {
  const fileData = []

  for (let file of payload) {
    const fileInfo = {}
    fileInfo['name'] = file.name
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const filteredContent = reader.result.substring(reader.result.indexOf(',')+1)
      fileInfo['content'] = filteredContent
      console.log(reader)
    }

    fileInfo['encoding'] = 'base64'
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
    payload
  }
}

export const removeFile = payload => {
  return {
    type: REMOVE_FILE,
    payload,
  }
}

export const clearAttachedFiles = () => {
  return {
    type: CLEAR_FILES,
  }
}
