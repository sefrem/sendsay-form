const initialState = {
    name: '',
    email: ''
}

const receiver = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_RECEIVER_NAME': 
        action.payload.persist()
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            };
        case 'UPDATE_RECEIVER_EMAIL':
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