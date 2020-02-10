import 'cypress-file-upload'
import 'cypress-wait-until'

const inputIds = [
  'senderName',
  'senderEmail',
  'receiverName',
  'receiverEmail',
  'subject',
  'text',
]

Cypress.Commands.add('checkIfAllInputsAreVisible', () => {
  inputIds.forEach(input => {
    cy.checkForVisibility(`[id=${input}]`)
  })
})

Cypress.Commands.add('checkForVisibility', selector => {
  cy.get(`${selector}`).should('be.visible')
})

Cypress.Commands.add('clickOnSubmit', () => {
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('checkIfErrorIsShown', (dataAttr, errorMessage) =>
  cy.get(`[data-error=${dataAttr}]`).should('contain', `${errorMessage}`)
)

Cypress.Commands.add('checkIfTypedDataIsCorrect', id => {
  cy.get(`[id=${id}]`)
    .type('Тест')
    .should('have.value', 'Тест')
})

Cypress.Commands.add('checkIfTypedDataInAllFieldsIsCorrect', () => {
  inputIds.forEach(input => {
    cy.checkIfTypedDataIsCorrect(input)
  })
})

Cypress.Commands.add('typeInText', (selector, text) => {
  cy.get(`${selector}`).type(`${text}`)
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
  cy.get('.attachement__remove-label').click()
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

Cypress.Commands.add('checkIncorrectSentMessage', subject => {
  const date = new Date().toLocaleString('ru', {
    day: '2-digit',
    month: 'long',
  })
  cy.get('[data-name="date"]').should('contain', date)
  cy.get(`[data-name="subject"]`).should('contain', 'Тема')
  cy.get('[data-name="status"]').should('have.class', 'list__status_pending')
  cy.waitUntil(
    () =>
      cy
        .get('[data-name="status"]')
        .then($item => $item[0].classList[1] === 'list__status_error'),
    { timeout: 20000, interval: 5000 }
  )
})

Cypress.Commands.add('checkCorrectSentMessage', () => {
  cy.get('[data-name="status"]').should('have.class', 'list__status_pending')
  cy.waitUntil(
    () =>
      cy
        .get('[data-name="status"]')
        .then($item => $item[0].classList[1] === 'list__status_success'),
    { timeout: 20000, interval: 5000 }
  )
})

Cypress.Commands.add('typeInWholeMessage', email => {
  cy.typeInText('[id="senderName"]', 'Отправитель')
  cy.typeInText('[id="senderEmail"]', email)
  cy.typeInText('[id="receiverName"]', 'Получатель')
  cy.typeInText('[id="receiverEmail"]', 'receiver@test.com')
  cy.typeInText('[id="subject"]', 'Тема')
  cy.typeInText('[id="text"]', 'Текст')
})

Cypress.Commands.add('checkIfAllInputsAreVisibleAndEmpty', () => {
  inputIds.forEach(input => {
    cy.checkForVisibility(`[id=${input}]`).should('be.empty')
  })
})

Cypress.Commands.add('checkIfModalIsVisibleAndContainsEmail', () => {
      cy.get('.modal').should('be.visible')
      cy.get('.modal__message').should('contain', 'receiver@test.com')
})
