
const files = (state = [], action) => {
	console.log(action)
	switch (action.type) {
		case "VALIDATE_FILES":
			console.log("in reducer validae files")
			return state
		case "ADD_FILES":
			return [...state, ...action.payload];
		default:
			return state;
	}
};

export default files;
