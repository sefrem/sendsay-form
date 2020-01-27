import React from 'react'
import { connect } from 'react-redux'
import { removeFile } from '../redux/files/files.actions'
import TrashIcon from './UI/Icons/TrashIcon'
import BigPaperclipIcon from './UI/Icons/BigPaperclipIcon'

const AttachedFiles = props => {
  const { files, removeFile } = props
  return (
    <div className="form__attachements">
      {files.map((file, index) => (
        <div className="form__attachement" key={index}>
          <BigPaperclipIcon />
          <div className="form__attachement-name">
            <div className="form__attachement-first-name">
              {file.name.substring(0, file.name.lastIndexOf('.'))}
            </div>
            <div className="form__attachement-type">{`.${file.name.substring(
              file.name.lastIndexOf('.') + 1
            )}`}</div>
          </div>
          <div
            className="form__attachement-remove"
            onClick={() => removeFile(file.name)}
          >
            <TrashIcon />
            <span className="form__attachement-remove-label">Удалить</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapDispatchToProps = {
  removeFile,
}

const mapStateToProps = state => {
  return {
    files: state.files,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttachedFiles)
