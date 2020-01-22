import React from "react";
import { connect } from "react-redux";
import { displayFileErrors } from "../redux/errors/errors.actions";
import { validateFiles } from "../redux/files/files.actions";

class Drop extends React.Component {
	state = {
		drag: false,
	};
	dragCounter = null;

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
		const { validateFiles } = this.props;

		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			validateFiles(e.dataTransfer.files);
		}
		e.dataTransfer.clearData();
		this.dragCounter = 0;
	};

	// filesValidation = files => {
	// 	const { displayFileErrors } = this.props;
	// 	const errors = {
	// 		files: {},
	// 	};
	// 	const fileTypes = [
	// 		"jpg",
	// 		"jpeg",
	// 		"png",
	// 		"gif",
	// 		"pdf",
	// 		"doc",
	// 		"docx",
	// 		"xls",
	// 		"xlsx",
	// 		"zip",
	// 	];
	// 	let totalFilesSize = null;
	// 	for (let file of files) {
	// 		totalFilesSize += file.size;
	// 		if (
	// 			!fileTypes.includes(file.name.substring(file.name.lastIndexOf(".") + 1))
	// 		) {
	// 			errors.files.type = "Не поддерживаемый тип файла";
	// 		} else if (file.size > 5242880) {
	// 			errors.files.size = "Размер одного файла не должен превышать 5МБ";
	// 		}
	// 	}
	// 	if (totalFilesSize > 20971520) {
	// 		errors.files.size = "Общий размер файлов не должен превышать 20МБ";
	// 	}

	// 	displayFileErrors(errors);
	// 	if (!Object.keys(errors.files).length) {
	// 		this.prepareFiles(files);
	// 	}
	// };

	// prepareFiles = files => {
	// 	const { addFiles } = this.props;
	// 	const fileData = [];

	// 	for (let file of files) {
	// 		const fileInfo = {};
	// 		fileInfo.name = file.name;
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL(file);
	// 		reader.onload = () => {
	// 			fileInfo.content = reader.result;
	// 		};

	// 		fileInfo.encoding = "base64";
	// 		fileData.push(fileInfo);
	// 	}
	// 	addFiles(fileData);
	// };

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
	displayFileErrors,
	validateFiles,
};

const mapStateToProps = state => {
	return {
		typeError: state.errors.files.type,
		sizeError: state.errors.files.size,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Drop);
