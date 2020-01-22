export const addFiles = payload => {
    return {
        type: "ADD_FILES",
        payload
    }
}

export const validateFiles = payload => {
    console.log(payload)
    return {
        type: "VALIDATE_FILES",
        payload
    }
}