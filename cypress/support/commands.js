import 'cypress-file-upload'
import 'cypress-wait-until'

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
        fileContent: fileContent,
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
      fileContent: fileContent,
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
        fileContent: fileContent,
        fileName: filename,
        mimeType: 'application/json',
      })
    })
    cy.checkIfErrorIsShown('type', errorMessages.errorType)
  })
})

Cypress.Commands.add('uploadTooLargeFile', filename => {
  cy.fixture('errorMessages.json').then(errorMessages => {
    cy.fixture(`files/${filename}`).then(fileContent => {
      cy.get('input[id="file"]').upload({
        fileContent: fileContent,
        fileName: filename,
        mimeType: 'application/pdf',
      })
      cy.checkIfErrorIsShown(
        'singleFileSize',
        errorMessages.errorSingleFileSize
      )
    })
  })
})

Cypress.Commands.add('uploadTotalTooLarge', () => {
  cy.fixture('errorMessages.json').then(errorMessages => {
    let files = [
      'files/totalSizeTooLarge/validFile1.jpg',
      'files/totalSizeTooLarge/validFile2.jpg',
      'files/totalSizeTooLarge/validFile3.jpg',
      'files/totalSizeTooLarge/validFile4.jpg',
      'files/totalSizeTooLarge/validFile5.jpg',
    ]
    files.map(file => {
      cy.fixture(`${file}`).then(fileContent => {
        cy.get('input[id="file"]').upload({
          fileContent: fileContent,
          fileName: file,
          mimeType: 'image/png',
        })
      })
    })
    cy.checkIfErrorIsShown('totalSize', errorMessages.errorMultipleFilesSize)
  })
})
