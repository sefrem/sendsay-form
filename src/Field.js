import React from "react";

const Field = props => {
  const {
    labelText,
    id,
    type,
    name,
    value,
    onChange,
    placeholder,
    error
  } = props;
  return (
    <div className="form__field">
      <label className="form__label" htmlFor={name}>{labelText}</label>
      <input
        id={id}
        type={type}
        className={error ? "form__input--error" : "form__input"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <div className="form__error">{error}</div> : null}
    </div>
  );
};

export default Field;