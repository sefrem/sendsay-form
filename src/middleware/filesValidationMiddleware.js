import { displayFileErrors } from '../redux/errors/errors.actions'
import { addFiles } from '../redux/files/files.actions'
import { VALIDATE_FILES } from '../redux/types'

const filesValidationMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== VALIDATE_FILES) {
    return next(action)
  }

  const errors = {
    files: {},
  }
  const fileTypes = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'pdf',
    'doc',
    'docx',
    'xls',
    'xlsx',
    'zip',
  ]
  let totalFilesSize = null
  for (let file of action.payload) {
    totalFilesSize += file.size
    if (
      !fileTypes.includes(file.name.substring(file.name.lastIndexOf('.') + 1))
    ) {
      errors.files.type = true
    } else if (file.size > 5242880) {
      errors.files.singleFileSize = true
    }
  }
  if (totalFilesSize > 20971520) {
    errors.files.totalFilesSize = true
  }

  dispatch(displayFileErrors(errors))

  if (!Object.keys(errors.files).length) {
    dispatch(addFiles(action.payload))
  }

  next(action)
}

export default filesValidationMiddleware
