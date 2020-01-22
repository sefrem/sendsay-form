import { UPDATE_SENDER_NAME, UPDATE_SENDER_EMAIL } from "../types"

export const updateSenderName = payload => {
    return {
        type: UPDATE_SENDER_NAME,
        payload
    }
}

export const updateSenderEmail = payload => {
    return {
        type: UPDATE_SENDER_EMAIL,
        payload
    }
}