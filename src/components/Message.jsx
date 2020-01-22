import React from "react";
import Field from "./UI/Field";
import { connect } from "react-redux";
import {
	updateMessageSubject,
	updateMessageText,
} from "../redux/message/message.actions";

const Message = props => {
	const { updateMessageSubject, updateMessageText, subject, text } = props;
	return (
		<div className="form__message">
			<div className="form__subject">
				<Field
					labelText="Тема письма"
					id="subject"
					type="text"
					name="subject"
					value={subject}
					onChange={updateMessageSubject}
				/>
			</div>
			<label className="form__label" htmlFor={"message"}>
				{"Сообщение"}
			</label>
			<textarea
				className="form__message-text"
				id="message"
				type="text"
				name="text"
				value={text}
				onChange={updateMessageText}
			></textarea>
		</div>
	);
};

const mapDispatchToProps = {
	updateMessageSubject,
	updateMessageText,
};

const mapStateToProps = state => {
	return {
		subject: state.message.subject,
		text: state.message.text,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
