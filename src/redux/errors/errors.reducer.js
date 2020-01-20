const initialState = {
	senderName: "",
	senderEmail: "",
	receiverName: "",
	receiverEmail: "",
};

const errors = (state = initialState, action) => {
	switch (action.type) {
		case "VALIDATION":
            state = initialState
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default errors;
