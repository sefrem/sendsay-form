import React from 'react';
import Field from "./Field"

const Message = props => {

    return (
        <div className="form__message">
        <div className="form__subject">
        <Field 
            labelText="Тема письма"
            id="subject"
            type="text"
            name="subject"
            // value={valueFirstName}
            // onChange={onChange}
            // error={errorFirstName}
          />
        </div>
        <div className="form__message-text"> 
        {/* <label className="form__label" htmlFor={message}>{labelText}</label>
            <textarea labelText="Сообщение"
            id="message"
            type="text"
            name="message">

            </textarea> */}
        {/* <Field 
            labelText="Сообщение"
            id="message"
            type="text"
            name="message"
            // value={valueFirstName}
            // onChange={onChange}
            // error={errorFirstName}
          /> */}
          </div>
        </div>
    )
}

export default Message