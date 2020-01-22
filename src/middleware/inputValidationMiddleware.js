import { displayInputErrors } from "../redux/errors/errors.actions";

const inputValidationMiddleware = ({
	dispatch,
	getState,
}) => next => action => {
	if (action.type !== "SEND_MESSAGE") {
		return next(action);
	}

	const errors = {
		input: {},
	};
	const {
		sender: { name: senderName, email: senderEmail },
		receiver: { name: receiverName, email: receiverEmail },
	} = getState();
    const emailValidationRegEx = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');

	if (senderName === "") {
		errors.input.senderName = "Введите имя отправителя";
	}
	if (receiverName === "") {
		errors.input.receiverName = "Введите имя получателя";
	}
	if (!emailValidationRegEx.test(senderEmail)) {
		senderEmail === ""
			? (errors.input.senderEmail = "Введите email")
			: (errors.input.senderEmail = "Некорректный email");
	}
	if (!emailValidationRegEx.test(receiverEmail)) {
		receiverEmail === ""
			? (errors.input.receiverEmail = "Введите email")
			: (errors.input.receiverEmail = "Некорректный email");
	}
    dispatch(displayInputErrors(errors));
    next(action)
};

export default inputValidationMiddleware;
