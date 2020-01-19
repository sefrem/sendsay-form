import React from 'react';
import Field from "./Field"

const Sender = props => {
    return (
        <div className="form__field-group">
          <Field 
            labelText="От кого"
            id="senderName"
            type="text"
            name="senderName"
            // value={valueFirstName}
            // onChange={onChange}
            placeholder="Имя"
            // error={errorFirstName}
          />
          <Field 
            id="senderEmail"
            type="text"
            name="senderEmail"
            // value={valueFirstName}
            // onChange={onChange}
            placeholder="Email"
            // error={errorFirstName}
          />
          </div>
    )
}

export default Sender