const initialState = {
	input: {
	senderName: "",
	senderEmail: "",
	receiverName: "",
	receiverEmail: "",
	},
	files: {
		type: "",
		size: ""
	}
};

const errors = (state = initialState, action) => {
	switch (action.type) {
		case "DISPLAY_INPUT_ERRORS":
			console.log(action.payload)
			return {
				...state,
				...action.payload,
			};
		case "DISPLAY_FILE_ERRORS":
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
};

export default errors;
