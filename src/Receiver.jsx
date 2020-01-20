import React from "react";
import Field from "./Field";
import { connect } from "react-redux";
import {
	updateReceiverName,
	updateReceiverEmail,
} from "./redux/receiver/receiver.actions";

class Receiver extends React.Component {
	render() {
		const {
			updateReceiverEmail,
			updateReceiverName,
			name,
			email,
			errorName,
			errorEmail,
		} = this.props;
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
				/>
				<Field
					id="receiverEmail"
					type="text"
					name="email"
					value={email}
					onChange={updateReceiverEmail}
					placeholder="Email"
					error={errorEmail}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = {
	updateReceiverName,
	updateReceiverEmail,
};

const mapStateToProps = state => {
	return {
		name: state.receiver.name,
		email: state.receiver.email,
		errorName: state.errors.receiverName,
		errorEmail: state.errors.receiverEmail,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Receiver);
