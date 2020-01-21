import React from "react";
import { connect } from "react-redux";
import { displayFileErrors } from "./redux/errors/errors.actions";
import { addFiles } from "./redux/files/files.actions";

class Drop extends React.Component {
  state = {
    drag: false
  };

  dropRef = React.createRef();

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true });
    }
  };

  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ drag: false });
    }
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    //   console.log(e.dataTransfer.files);
      this.filesValidation(e.dataTransfer.files);
    }
    e.dataTransfer.clearData();
    this.dragCounter = 0;
  };

  filesValidation = files => {
    const { displayFileErrors } = this.props;
    const errors = {
      files: {}
    };
    const fileTypes = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "zip"
    ];
    let totalFilesSize = null;
    for (let file of files) {
      totalFilesSize += file.size;
      if (
        !fileTypes.includes(file.name.substring(file.name.lastIndexOf(".") + 1))
      ) {
        errors.files.type = "Не поддерживаемый тип файла";
      } else if (file.size > 5242880) {
        errors.files.size = "Размер одного файла не должен превышать 5МБ";
      }
    }
    if (totalFilesSize > 20971520) {
      errors.files.size = "Общий размер файлов не должен превышать 20МБ";
    }

    if (Object.keys(errors).length) {
		console.log("NOT")
      displayFileErrors(errors);
    } else {
	  displayFileErrors();
	  console.log('here')
	  this.prepareFiles(files)
    }
  };

  prepareFiles = files => {
	//   name, content, encoding(base64)
	console.log(files)

  }


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
      <div className="form__drag-drop" ref={this.dropRef}>
        {this.state.drag && (
          <div
            style={{
              border: "dashed grey 4px",
              backgroundColor: "rgba(255,255,255,.8)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                left: 0,
                textAlign: "center",
                color: "grey",
                fontSize: 36
              }}
            >
              <div>drop here :)</div>
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
  displayFileErrors,
  addFiles
};

const mapStateToProps = state => {
  return {
    typeError: state.errors.files.type,
    sizeError: state.errors.files.size
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
