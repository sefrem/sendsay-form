import React from "react";
import { connect } from "react-redux";
import { displayErrorsOnFields } from "./redux/errors/errors.actions";

const Submit = props => {
	const onSubmit = () => {
		const errors = {};
		const {
			senderName,
			senderEmail,
			receiverName,
			receiverEmail,
			displayErrorsOnFields,
		} = props;

		if (senderName === "") {
			errors.senderName = "Введите имя отправителя";
		}
		if (receiverName === "") {
			errors.receiverName = "Введите имя получателя";
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
			senderEmail === ""
				? (errors.senderEmail = "Введите email")
				: (errors.senderEmail = "Некорректный email");
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(receiverEmail)) {
			receiverEmail === ""
				? (errors.receiverEmail = "Введите email")
				: (errors.receiverEmail = "Некорректный email");
		}
		if (Object.keys(errors).length) {
			displayErrorsOnFields(errors);
		} else {
			displayErrorsOnFields()
		}
		return errors;
	};

	return (
		<input
			type="submit"
			value="Отправить"
			className="form__submit"
			onClick={onSubmit}
		></input>
	);
};

const mapDispatchToProps = {
	displayErrorsOnFields,
};

const mapStateToProps = state => {
	return {
		senderName: state.sender.name,
		senderEmail: state.sender.email,
		receiverName: state.receiver.name,
		receiverEmail: state.receiver.email,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
