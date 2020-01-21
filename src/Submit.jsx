import React from "react";
import { connect } from "react-redux";
import { displayInputErrors } from "./redux/errors/errors.actions";

const Submit = props => {
  const onSubmit = () => {
    const errors = {
      input: {}
    };
    const {
      senderName,
      senderEmail,
      receiverName,
      receiverEmail,
      displayInputErrors
    } = props;

    if (senderName === "") {
      errors.input.senderName = "Введите имя отправителя";
    }
    if (receiverName === "") {
      errors.input.receiverName = "Введите имя получателя";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      senderEmail === ""
        ? (errors.input.senderEmail = "Введите email")
        : (errors.input.senderEmail = "Некорректный email");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(receiverEmail)) {
      receiverEmail === ""
        ? (errors.input.receiverEmail = "Введите email")
        : (errors.input.receiverEmail = "Некорректный email");
    }
    displayInputErrors(errors);
  };

  return (
    <input
      type="submit"
      value="Отправить"
      className="form__submit"
      onClick={onSubmit}
    ></input>
  );
};

const mapDispatchToProps = {
  displayInputErrors
};

const mapStateToProps = state => {
  return {
    senderName: state.sender.name,
    senderEmail: state.sender.email,
    receiverName: state.receiver.name,
    receiverEmail: state.receiver.email
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
