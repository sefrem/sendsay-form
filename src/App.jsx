import React from 'react'
import Field from "./Field"
import Sender from "./Sender"
import Receiver from "./Receiver"
import Message from "./Message"

function App() {
  return (
    <div className="form">
      <div className="form__content-wrapper">
      <div className="form__header">Отправлялка сообщений</div>
      <Sender />
      <Receiver />
       <Message />
    </div>
    </div>
  );
}

export default App;
