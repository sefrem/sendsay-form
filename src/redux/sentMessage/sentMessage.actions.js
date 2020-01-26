import { MESSAGE_SENT, ADD_TO_SENT, UPDATE_MESSAGE_STATUS, UPDATE_MESSAGE_STAT } from '../types'

export const sendMessage = payload => {
  return {
    type: MESSAGE_SENT,
    payload,
  }
}

export const addToSent = ({id, subject}) => {
  const date = new Date().toLocaleString('ru', {
    day: '2-digit',
    month: 'long',
  })
  const payload = {
      id: id,
      subject: subject,
      date: date,
  }
  return {
    type: ADD_TO_SENT,
    payload,
  }
}

export const updateMessageStatus = payload => {
  return {
    type: UPDATE_MESSAGE_STATUS,
    payload
  }
}

export const updateMessageStat = payload => {
  return {
    type: UPDATE_MESSAGE_STAT,
    payload
  }
}
