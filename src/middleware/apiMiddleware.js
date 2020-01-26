import Sendsay from 'sendsay-api'
import { MESSAGE_SENT } from '../redux/types'
import {
  addToSent,
  updateMessageStatus,
} from '../redux/sentMessage/sentMessage.actions'

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== MESSAGE_SENT) {
    return next(action)
  }

  const {
    sender: { name: senderName, email: senderEmail },
    receiver: { name: receiverName, email: receiverEmail },
    message: { subject, text },
    files,
  } = getState()

  const sendsay = new Sendsay()

  sendsay
    .login({
      login: process.env.REACT_APP_LOGIN,
      password: process.env.REACT_APP_PASSWORD,
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
        })
    })

  next(action)
}

export default apiMiddleware
