import React from 'react'
import { connect } from 'react-redux'
import { validateFiles } from '../../redux/attachedFiles/attachedFiles.actions'
import SmallPaperclipIcon from '../UI/Icons/SmallPaperclipIcon'

const FileInput = props => {
  const { typeError, fileSizeError, totalSizeError } = props
  return (
    <div className="file-input">
      <label htmlFor="file" className="file-input__label">
        <SmallPaperclipIcon />
        <div className="file-input__label-name">Прикрепить файл</div>
      </label>
      <input
        type="file"
        id="file"
        name="file"
        multiple
        hidden
        onChange={e => props.validateFiles(e.target.files)}
      />
      <div className="file-input__error-message">
        <div data-error='type'>{typeError ? 'Не поддерживаемый тип файла' : null}</div>
        <div data-error="singleFileSize">
          {fileSizeError ? 'Размер одного файла не должен превышать 5МБ' : null}
        </div>
        <div data-error="totalSize">
          {totalSizeError
            ? 'Общий размер файлов не должен превышать 20МБ'
            : null}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  validateFiles,
}

const mapStateToProps = state => {
  return {
    typeError: state.errors.files.type,
    fileSizeError: state.errors.files.singleFileSize,
    totalSizeError: state.errors.files.totalFilesSize,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileInput)
