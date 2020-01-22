const sendMessage = (state = null, action) => {
	switch (action.type) {
		case "SEND_MESSAGE":
			console.log("sending the message");
			return null
			break;
		default:
			return state;
	}
};

export default sendMessage;
