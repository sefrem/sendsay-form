import React from 'react';
import Field from "./Field"

const Receiver = props => {
    return (
        <div className="form__field-group">
        <Field 
          labelText="Кому"
          id="recipientName"
          type="text"
          name="recipientName"
          // value={valueFirstName}
          // onChange={onChange}
          placeholder="Имя"
          // error={errorFirstName}
        />
        <Field 
          id="recipientEmail"
          type="text"
          name="recipientEmail"
          // value={valueFirstName}
          // onChange={onChange}
          placeholder="Email"
          // error={errorFirstName}
        />
      </div>
    )
}

export default Receiver