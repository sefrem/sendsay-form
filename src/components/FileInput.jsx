import React from "react";

const FileInput = props => {
	return (
		<div className="form__attachement">
			<label htmlFor="file" className="form__attachement-label">
				<svg
					width="17"
					height="15"
					viewBox="0 0 17 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3.4 14.743C2.608 14.743 1.8635 14.435 1.3035 13.8745C0.743498 13.3145 0.434998 12.57 0.434998 11.778C0.434998 10.9865 0.743498 10.2415 1.3035 9.6815L9.7885 1.1965C11.3345 -0.349 13.8505 -0.3495 15.396 1.1965C16.145 1.945 16.5575 2.941 16.5575 4C16.5575 5.059 16.145 6.055 15.396 6.8035L9.032 13.1675L8.3745 12.51L14.7385 6.146C15.922 4.9625 15.922 3.0375 14.7385 1.854C13.556 0.671 11.63 0.6705 10.4465 1.854L1.961 10.3395C1.5765 10.7235 1.365 11.2345 1.365 11.778C1.365 12.322 1.5765 12.8325 1.961 13.217C2.7545 14.0105 4.0455 14.01 4.839 13.217L11.203 6.853C11.6065 6.4495 11.6065 5.793 11.203 5.389C10.7995 4.9855 10.1425 4.986 9.7395 5.3895L5.4965 9.632L4.839 8.9745L9.0815 4.7315C9.8475 3.966 11.0945 3.9655 11.8605 4.7315C12.6265 5.498 12.6265 6.7445 11.8605 7.5105L5.4965 13.8745C4.9365 14.435 4.192 14.743 3.4 14.743"
						fill="#0055FB"
					/>
				</svg>
				Прикрепить файл
			</label>
			<input
				type="file"
				id="file"
				name="file"
				multiple
				hidden
				onChange={e => handleChange(e.target.files)}
			/>
		</div>
	);
};

export default FileInput;

const handleChange = files => {
	console.log(files);
};
