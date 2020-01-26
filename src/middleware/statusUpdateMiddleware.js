import Sendsay from 'sendsay-api'
import { UPDATE_MESSAGE_STATUS } from '../redux/types'
import { updateMessageStat } from '../redux/sentMessage/sentMessage.actions'

const statusUpdateMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== UPDATE_MESSAGE_STATUS) {
    return next(action)
  }

  const sendsay = new Sendsay()

  sendsay
    .login({
      login: process.env.REACT_APP_LOGIN,
      password: process.env.REACT_APP_PASSWORD,
    })
    .then(res => {
      sendsay
        .request({
          action: 'track.get',
          id: action.payload,
        })
        .then(res => {
          dispatch(
            updateMessageStat({
              id: action.payload,
              status: res.obj.status,
            })
          )
        })
    })

  next(action)
}

export default statusUpdateMiddleware
