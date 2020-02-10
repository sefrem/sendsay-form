import { SUBMIT_MESSAGE, ADD_TO_SENT, UPDATE_MESSAGE_STATUS, UPDATE__STATUS } from './sentMessage.types'

export const submitMessage = payload => {
  return {
    type: SUBMIT_MESSAGE,
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

export const updateStatus = payload => {
  return {
    type: UPDATE__STATUS,
    payload
  }
}
