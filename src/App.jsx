import React from "react";
import Sender from "./components/Sender";
import Receiver from "./components/Receiver";
import Message from "./components/Message";
import Submit from "./components/Submit";
import Drop from "./components/Drop";
import FileInput from "./components/FileInput"

function App() {
	return (
		<div className="form">
			<div className="form__content-wrapper">
				<Drop>
					<div className="form__header">Отправлялка сообщений</div>
					<Sender />
					<Receiver />
					<Message />
					<FileInput />
					
					<Submit />
				</Drop>
			</div>
		</div>
	);
}

export default App;
