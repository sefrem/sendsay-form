import { MESSAGE_SENT, ADD_TO_SENT } from '../types'

export const sendMessage = payload => {
  return {
    type: MESSAGE_SENT,
    payload,
  }
}

export const addToSent = data => {
  const date = new Date().toLocaleString('ru', {day: "2-digit", month: 'long'})
  const payload = {
    [data.id]: {
      id: data.id,
      subject: data.subject,
      date: date
    }
  }
  console.log(payload)
  return {
    type: ADD_TO_SENT,
    payload,
  }
}