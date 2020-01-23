import Sendsay from 'sendsay-api'
import { SEND_MESSAGE } from '../redux/types'

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== SEND_MESSAGE) {
    return next(action)
  }

  const {
    sender: { name: senderName, email: senderEmail },
    receiver: { name: receiverName, email: receiverEmail },
    message: { subject, text },
  } = getState()

  const sendsay = new Sendsay({
    auth: {
      login: 'fireweb2112@gmail.com',
      password: 'thi7Musam',
    },
  })

  sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
    sendsay.setSession(res.sendsay_session);
  })

  sendsay
    .request({
      'action' : "issue.send.test",
      'letter' : {
        'subject' : {subject},
        'from.name' : {senderName} ,
        "from.email" : {senderEmail},
        "to.name" : {receiverName},
        "message": { "text" : {text} },
        "attaches": [ 
                      {
                        "name" : "имя файла",
                        "content": "содержимое файла закодированное base64",
                        "encoding" : "base64",
                      }
                    ]
      },
      "sendwhen": "test",
      "mca": [
        {receiverEmail},
      ]
    })
    .then(result => {
      console.log(result)
    })

  next(action)
}

export default apiMiddleware
