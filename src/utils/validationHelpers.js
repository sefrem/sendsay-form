export const emptyInputValidation = input => {
  return !input.length > 0
}

export const emailValidation = input => {
  const emailValidationRegEx = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
  )
  return !emailValidationRegEx.test(input)
}
