const initialState = {
	subject: "",
	text: "",
};

const message = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_MESSAGE_SUBJECT":
            action.payload.persist()
			return {
				...state,
				[action.payload.target.name]: action.payload.target.value,
			};
		case "UPDATE_MESSAGE_TEXT":
            action.payload.persist()
			return {
				...state,
				[action.payload.target.name]: action.payload.target.value,
			};
		default:
			return state;
	}
};

export default message