import React from "react";
import Field from "./Field";
import { connect } from "react-redux";
import {
	updateSenderName,
	updateSenderEmail,
} from "./redux/sender/sender.actions";

const Sender = props => {
	const {
		updateSenderName,
		updateSenderEmail,
		name,
		email,
		errorName,
		errorEmail,
	} = props;
	return (
		<div className="form__field-group">
			<Field
				labelText="От кого"
				id="senderName"
				type="text"
				name="name"
				value={name}
				onChange={updateSenderName}
				placeholder="Имя"
				error={errorName}
			/>
			<Field
				id="senderEmail"
				type="text"
				name="email"
				value={email}
				onChange={updateSenderEmail}
				placeholder="Email"
				error={errorEmail}
			/>
		</div>
	);
};

const mapDispatchToProps = {
	updateSenderName,
	updateSenderEmail,
};

const mapStateToProps = state => {
	return {
		name: state.sender.name,
		email: state.sender.email,
		errorName: state.errors.senderName,
		errorEmail: state.errors.senderEmail,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sender);
