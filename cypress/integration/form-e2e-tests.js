describe('Тестируем форму отправки емэйлов', () => {
  context('Отправка сообщения', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    // it('Форма должна содержать все необходимые поля', () => {
    //   cy.checkIfInputIsVisible('senderName')
    //   cy.checkIfInputIsVisible('senderEmail')
    //   cy.checkIfInputIsVisible('receiverName')
    //   cy.checkIfInputIsVisible('receiverEmail')
    //   cy.checkIfInputIsVisible('subject')
    //   cy.checkForVisibility('textarea[id="text"]')
    //   cy.checkForVisibility('label[for="file"]')
    //   cy.checkForVisibility('input[type="submit"]')
    // })

    // it('При попытке отправить сообщение с незаполненными полями в каждом появляется ошибка', () => {
    //   cy.get('input[type="submit"]').click()
    //   cy.fixture('errorMessages.json').then(error => {
    //     cy.checkIfErrorIsShown('senderName', error.senderName)
    //     cy.checkIfErrorIsShown('senderEmail', error.senderEmail)
    //     cy.checkIfErrorIsShown('receiverName', error.receiverName)
    //     cy.checkIfErrorIsShown('receiverEmail', error.receiverEmail)
    //     cy.checkIfErrorIsShown('subject', error.subject)
    //     cy.checkIfErrorIsShown('text', error.text)
    //   })
    // })

    // it('Введенные в поля данные соответствуют отображаемым', () => {
    //   cy.checkIfTypedDataIsCorrect('senderName')
    //   cy.checkIfTypedDataIsCorrect('senderEmail')
    //   cy.checkIfTypedDataIsCorrect('receiverName')
    //   cy.checkIfTypedDataIsCorrect('receiverEmail')
    //   cy.checkIfTypedDataIsCorrect('subject')
    //   cy.get('textarea[id="text"]')
    //     .type('Тест')
    //     .should('have.value', 'Тест')
    // })

    // it('Добавленный через drag&drop файл должен отображаться в списке добавленных файлов и удаляться по нажатию на "Удалить"', () => {
    //   cy.uploadValidFileviaDragDrop('validFile.jpg')
    //   cy.removeFile('validFile.jpg')
    // })

    // it('Добавленный через input файл должен отображаться в списке добавленных файлов и удаляться по нажатию на "Удалить"', () => {
    //   cy.uploadValidFileviaInput('validFile.jpg')
    //   cy.removeFile('validFile.jpg')
    // })

    // it('При добавлении файла неподходящего формата должна появляться ошибка', () => {
    //   cy.uploadInvalidTypeFile('invalidTypeFile.json')
    // })

    // it('При добавлении файла больше 5МБ должна появляться ошибка', () => {
    //   cy.uploadTooLargeFile('tooLargeFile.pdf')
    // })

    // it('При добавлении файлов общим объемом более 20МБ должна появляться ошибка', () => {
    //   cy.uploadTotalTooLarge()
    // })
  })
})
