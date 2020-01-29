import Sendsay from 'sendsay-api'
import { SUBMIT_MESSAGE } from '../redux/sentMessage/sentMessage.types'
import { addToSent } from '../redux/sentMessage/sentMessage.actions'
import { toggleModal } from '../redux/modal/modal.actions'

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

  const sendsay = new Sendsay()

  sendsay
    .login({
      login: 'fireweb2112@gmail.com',
      password: 'thi7Musam'
      // login: process.env.REACT_APP_LOGIN,
      // password: process.env.REACT_APP_PASSWORD,
    })
    .then(res => {
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
          dispatch(addToSent({ id: response['track.id'], subject: subject }))
          dispatch(toggleModal())
        })
    })

  next(action)
}

export default submitMessageMiddleware
