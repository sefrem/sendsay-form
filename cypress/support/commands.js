import 'cypress-file-upload'
import 'cypress-wait-until';

Cypress.Commands.add('checkIfInputIsVisible', id =>
  cy.get(`input[id=${id}]`).should('be.visible')
)

Cypress.Commands.add('checkForVisibility', selector => {
  cy.get(`${selector}`).should('be.visible')
})

Cypress.Commands.add('checkIfErrorIsShown', (dataAttr, errorMessage) =>
  cy.get(`[data-error=${dataAttr}]`).should('contain', `${errorMessage}`)
)

Cypress.Commands.add('checkIfTypedDataIsCorrect', id => {
  cy.get(`input[id=${id}]`)
    .type('Тест')
    .should('have.value', 'Тест')
})

Cypress.Commands.add('uploadValidFileviaDragDrop', filename => {
  cy.fixture(`files/${filename}`).then(fileContent => {
    cy.get('.drag-drop').upload(
      {
        fileContent: fileContent.toString(),
        fileName: filename,
        mimeType: 'image/jpeg',
      },
      { subjectType: 'drag-n-drop' }
    )
  })
  cy.contains(filename)
})

Cypress.Commands.add('removeFile', filename => {
  cy.get('.form__attachement-remove-label').click()
  cy.contains(filename).should('not.exist')
})

Cypress.Commands.add('uploadValidFileviaInput', filename => {
  cy.fixture(`files/${filename}`).then(fileContent => {
    cy.get('input[id="file"]').upload({
      fileContent: fileContent.toString(),
      fileName: filename,
      mimeType: 'image/jpeg',
    })
  })
  cy.contains(filename)
})

Cypress.Commands.add('uploadInvalidTypeFile', filename => {
  cy.fixture('errorMessages.json').then(errorMessages => {

  cy.fixture(`files/${filename}`).then(fileContent => {
    cy.get('input[id="file"]').upload({
      fileContent: fileContent.toString(),
      fileName: filename,
      mimeType: 'application/json',
    })
  }).then(() => {
    cy.checkIfErrorIsShown('type', errorMessages.errorType)
  })
})
})

Cypress.Commands.add('uploadTooLargeFile', filename => {
  cy.fixture('errorMessages.json').then(errorMessages => {

  cy.fixture(`files/${filename}`).then(fileContent => {
    cy.waitUntil(() => cy.get('input[id="file"]').upload({
      fileContent: fileContent.toString(),
      fileName: filename,
      mimeType: 'application/pdf',
    }).then(() => {
      cy.checkIfErrorIsShown('singleFileSize', errorMessages.errorSingleFileSize)
    })
  })
})
})