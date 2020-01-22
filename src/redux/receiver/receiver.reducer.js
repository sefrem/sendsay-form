import { UPDATE_RECEIVER_NAME, UPDATE_RECEIVER_EMAIL } from "../types"

const initialState = {
    name: '',
    email: ''
}

const receiver = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_RECEIVER_NAME: 
        case UPDATE_RECEIVER_EMAIL:
            action.payload.persist()
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            };
        default:
            return state
    }
}

export default receiver