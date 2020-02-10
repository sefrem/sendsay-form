import * as types from "./submitButton.types"

export const toggleSubmitButton = () => {
    return {
      type: types.TOGGLE_SUBMIT_BUTTON,
    }
  }