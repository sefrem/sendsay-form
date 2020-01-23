import React from "react";
import Field from "./UI/Field";
import { connect } from "react-redux";
import {
	updateReceiverName,
	updateReceiverEmail,
} from "../redux/receiver/receiver.actions";

const Receiver = props => {
	const {
		updateReceiverEmail,
		updateReceiverName,
		name,
		email,
		errorName,
		errorEmail,
	} = props;
	return (
		<div className="form__field-group">
			<Field
				labelText="Кому"
				id="receiverName"
				type="text"
				name="name"
				value={name}
				onChange={updateReceiverName}
				placeholder="Имя"
				error={errorName}
				errorMessage="Введите имя получателя"
			/>
			<Field
				id="receiverEmail"
				type="text"
				name="email"
				value={email}
				onChange={updateReceiverEmail}
				placeholder="Email"
				error={errorEmail}
				errorMessage="Некорректный email"
			/>
		</div>
	);
};

const mapDispatchToProps = {
	updateReceiverName,
	updateReceiverEmail,
};

const mapStateToProps = state => {
	return {
		name: state.receiver.name,
		email: state.receiver.email,
		errorName: state.errors.input.receiverName,
		errorEmail: state.errors.input.receiverEmail,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Receiver);
