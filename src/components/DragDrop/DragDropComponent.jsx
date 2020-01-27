import React from 'react'

const DragDropComponent = props => {
  return (
    <div>
      {props.drag && (
        <div className="drag-drop__cover">
          <div className="drag-drop__info">
            <p className="drag-drop__text">Бросайте файлы сюда, я ловлю</p>
            <p className="drag-drop__message">
              Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls,
              pdf) и zip-архивы. Размеры файла до 5 МБ
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DragDropComponent
