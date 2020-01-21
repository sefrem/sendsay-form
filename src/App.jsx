import React from "react";
import Sender from "./Sender";
import Receiver from "./Receiver";
import Message from "./Message";
import Submit from "./Submit";
import Drop from "./Drop";

function App() {
	return (
		<div className="form">
			<div className="form__content-wrapper">
				<Drop>
					<div className="form__header">Отправлялка сообщений</div>
					<Sender />
					<Receiver />
					<Message />
					<div className="form__attachement">
						<p>Прикрепить файл</p>
					</div>
					<Submit />
				</Drop>
			</div>
		</div>
	);
}

export default App;
