import React from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";
import Message from "./Message";
import Submit from "./Submit";

function App() {
	return (
		<div className="form">
			<div className="form__content-wrapper">
				<div className="form__header">Отправлялка сообщений</div>
				<Sender />
				<Receiver />
				<Message />
				<div className="form__attachement">
					<p>Прикрепить файл</p>
				</div>
				<Submit />
			</div>
		</div>
	);
}

export default App;
