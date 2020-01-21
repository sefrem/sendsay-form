import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = props => {
	const onDrop = acceptedFiles => {
		acceptedFiles.forEach(file => {
			const reader = new FileReader();
			reader.onload = () => {
				const binaryStr = reader.result;
				console.log(binaryStr);
			};
			reader.readAsDataURL(file);
		});
	};
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<p>Drag 'n' drop some files here, or click to select files</p>
		</div>
	);
};

export default Dropzone;
