import { displayInputErrors } from '../redux/errors/errors.actions'
import { SUBMIT_MESSAGE } from '../redux/sentMessage/sentMessage.types'
import {
  emptyInputValidation,
  emailValidation,
} from '../utils/validationHelpers'

const inputValidationMiddleware = ({
  dispatch,
  getState,
}) => next => action => {
  if (action.type !== SUBMIT_MESSAGE) {
    return next(action)
  }

  const {
    sender: { name: senderName, email: senderEmail },
    receiver: { name: receiverName, email: receiverEmail },
    message: { subject, text },
  } = getState()

  const inputErrors = {
    input: {
      senderName: emptyInputValidation(senderName),
      senderEmail: emailValidation(senderEmail),
      receiverName: emptyInputValidation(receiverName),
      receiverEmail: emailValidation(receiverEmail),
      subject: emptyInputValidation(subject),
      text: emptyInputValidation(text),
    },
  }

  const inputsAreValid = errors => !Object.values(errors).some(err => err)

  dispatch(displayInputErrors(inputErrors))

  if (inputsAreValid(inputErrors.input)) {
    next(action)
  }
}

export default inputValidationMiddleware
