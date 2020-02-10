import Sendsay from 'sendsay-api'
import { SUBMIT_MESSAGE } from '../redux/sentMessage/sentMessage.types'
import { addToSent } from '../redux/sentMessage/sentMessage.actions'
import { toggleModal } from '../redux/modal/modal.actions'
import { toggleSubmitButton } from '../redux/submitButton/submitButton.actions'
import { clearAttachedFiles } from '../redux/attachedFiles/attachedFiles.actions'
import { clearMessage } from '../redux/message/message.actions'
import { clearReceiver } from '../redux/receiver/receiver.actions'
import { clearSender } from '../redux/sender/sender.actions'

const submitMessageMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== SUBMIT_MESSAGE) {
    return next(action)
  }

  const {
    sender: { name: senderName, email: senderEmail },
    receiver: { name: receiverName, email: receiverEmail },
    message: { subject, text },
    attachedFiles: { files },
  } = getState()

  const sendsay = new Sendsay({ apiKey: process.env.REACT_APP_APIKEY })

  sendsay
    .request({
      action: 'issue.send.test',
      letter: {
        subject: subject,
        'from.name': senderName,
        'from.email': senderEmail,
        'to.name': receiverName,
        message: { text: text },
        attaches: [...files],
      },
      sendwhen: 'test',
      mca: [receiverEmail],
    })
    .then(response => {
      dispatch(toggleSubmitButton())
      dispatch(toggleModal())
      dispatch(addToSent({ id: response['track.id'], subject: subject }))
      setTimeout(() => dispatch(clearAllFields()), 5000)
    })

  next(action)

  const clearAllFields = () => dispatch => {
    dispatch(toggleSubmitButton())
    dispatch(clearAttachedFiles())
    dispatch(toggleModal())
    dispatch(clearMessage())
    dispatch(clearReceiver())
    dispatch(clearSender())
  }
}

export default submitMessageMiddleware
