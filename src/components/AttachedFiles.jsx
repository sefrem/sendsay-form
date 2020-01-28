import React from 'react'
import { connect } from 'react-redux'
import { removeFile } from '../redux/attachedFiles/attachedFiles.actions'
import TrashIcon from './UI/Icons/TrashIcon'
import BigPaperclipIcon from './UI/Icons/BigPaperclipIcon'

const AttachedFiles = props => {
  const { files, removeFile } = props
  return (
    <div className="list">
      {files.map((file, index) => (
        <div className="attachement" key={index}>
          <BigPaperclipIcon />
          <div className="attachement__name">
            <div className="attachement__file-name">
              {file.name.substring(0, file.name.lastIndexOf('.'))}
            </div>
            <div>{`.${file.name.substring(
              file.name.lastIndexOf('.') + 1
            )}`}</div>
          </div>
          <div
            className="attachement__remove"
            onClick={() => removeFile(file)}
          >
            <TrashIcon />
            <span className="attachement__remove-label">Удалить</span>
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
    files: state.attachedFiles.files,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttachedFiles)
