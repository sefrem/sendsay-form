import React from "react";
import { connect } from "react-redux";
import { validateFiles } from "../redux/files/files.actions";

class Drop extends React.Component {
  state = {
    drag: false
  };
  dragCounter = null;

  dropRef = React.createRef();

  preventDefaultStopPropagation = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrag = e => {
    this.preventDefaultStopPropagation(e);
  };

  handleDragIn = e => {
    this.preventDefaultStopPropagation(e);
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true });
    }
  };

  handleDragOut = e => {
    this.preventDefaultStopPropagation(e);
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ drag: false });
    }
  };

  handleDrop = e => {
    this.preventDefaultStopPropagation(e);
    this.setState({ drag: false });
    const { validateFiles } = this.props;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateFiles(e.dataTransfer.files);
    }
    e.dataTransfer.clearData();
    this.dragCounter = 0;
  };

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }

  render() {
    const { typeError, sizeError } = this.props;
    return (
      <div className="drag-drop" ref={this.dropRef}>
        {this.state.drag && (
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

        {this.props.children}
        <div>
          {typeError}
          {sizeError}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  validateFiles
};

const mapStateToProps = state => {
  return {
    typeError: state.errors.files.type,
    sizeError: state.errors.files.size
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
