const initialState = {
    name: '',
    email: ''
}

const sender = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_SENDER_NAME': 
        action.payload.persist()
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            };
        case 'UPDATE_SENDER_EMAIL':
            action.payload.persist()
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            };
        default:
            return state
    }
}

export default sender