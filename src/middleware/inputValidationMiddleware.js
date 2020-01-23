import { displayInputErrors } from "../redux/errors/errors.actions";

const inputValidationMiddleware = ({
	dispatch,
	getState,
}) => next => action => {
	if (action.type !== "SEND_MESSAGE") {
		return next(action);
	}

	const {
		sender: { name: senderName, email: senderEmail },
		receiver: { name: receiverName, email: receiverEmail },
		message: { subject, text },
	} = getState();

	const emptyInputValidation = input => {
		return !input.length > 0;
	};

	const emailValidation = input => {
		const emailValidationRegEx = new RegExp(
			"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
		);
		return !emailValidationRegEx.test(input);
	};

	const inputErrors = {
		input: {
			senderName: emptyInputValidation(senderName),
			senderEmail: emailValidation(senderEmail),
			receiverName: emptyInputValidation(receiverName),
			receiverEmail: emailValidation(receiverEmail),
			subject: emptyInputValidation(subject),
			text: emptyInputValidation(text)
		},
	};

	dispatch(displayInputErrors(inputErrors));
	next(action);
};

export default inputValidationMiddleware;
