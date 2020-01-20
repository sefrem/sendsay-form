import React from "react";
import { connect } from "react-redux";
import { onValidation } from "./redux/errors/errors.actions";

class Submit extends React.Component {
	validation = () => {
		const errors = {};
		const {
			senderName,
			senderEmail,
			receiverName,
			receiverEmail,
			onValidation,
		} = this.props;

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
		onValidation(errors);
		return errors;
	};

	render() {
		return (
			<input
				type="submit"
				value="Отправить"
				className="form__submit"
				onClick={this.validation}
			></input>
		);
	}
}

const mapDispatchToProps = {
	onValidation,
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
