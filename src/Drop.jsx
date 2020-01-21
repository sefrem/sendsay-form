import React from "react";
class Drop extends React.Component {
	state = {
		drag: false,
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
        const errors = {
            files: {
                type: '',
                size: ''
            }
        }
		const fileTypes = [
            "image/jpg",
            "image/jpeg",
			"image/png",
			"image/gif",
			"application/pdf",
            "application/doc",
            "application/docx",
			"application/xls",
			"application/zip",
		];
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			console.log(e.dataTransfer.files);
			for (let file of e.dataTransfer.files) {
                if(!fileTypes.includes(file.type)) {
                 errors.files.type = "Не поддерживаемый тип файла"
                } else if(file.size > 5242880) {
                 errors.files.size = "Размер одного файла не должен превышать 5МБ"    
                }
                
            }
            console.log(errors)
		}
		e.dataTransfer.clearData();
		this.dragCounter = 0;
	};

	// acceptedFiles.forEach(file => {
	//     const reader = new FileReader();
	//     reader.onload = () => {
	//         const binaryStr = reader.result;
	//         console.log(binaryStr);
	//     };
	//     reader.readAsDataURL(file);
	// });

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
							zIndex: 9999,
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
								fontSize: 36,
							}}
						>
							<div>drop here :)</div>
						</div>
					</div>
				)}
				{this.props.children}
			</div>
		);
	}
}
export default Drop;
