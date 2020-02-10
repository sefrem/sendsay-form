describe('Тестируем форму отправки email', () => {
  context('Проверка полей и функционала добавления файлов', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Форма содержит все необходимые поля', () => {
      cy.checkIfAllInputsAreVisible()
      cy.checkForVisibility('label[for="file"]')
      cy.checkForVisibility('button[type="submit"]')
    })

    it('При попытке отправить сообщение с незаполненными полями в каждом появляется ошибка', () => {
      cy.clickOnSubmit()
      cy.fixture('errorMessages.json').then(error => {
        cy.checkIfErrorIsShown('senderName', error.senderName)
        cy.checkIfErrorIsShown('senderEmail', error.senderEmail.empty)
        cy.checkIfErrorIsShown('receiverName', error.receiverName)
        cy.checkIfErrorIsShown('receiverEmail', error.receiverEmail.empty)
        cy.checkIfErrorIsShown('subject', error.subject)
        cy.checkIfErrorIsShown('text', error.text)
      })
    })

    it('Показывается ошибка, если email некорректен', () => {
      cy.typeInText('[id="senderEmail"]', 'wrong')
      cy.typeInText('[id="receiverEmail"]', 'wrong')
      cy.clickOnSubmit()
      cy.fixture('errorMessages.json').then(error => {
        cy.checkIfErrorIsShown('senderEmail', error.senderEmail.invalid)
        cy.checkIfErrorIsShown('receiverEmail', error.receiverEmail.invalid)
      })
    })

    it('Введенные в поля данные соответствуют отображаемым', () => {
      cy.checkIfTypedDataInAllFieldsIsCorrect()
    })

    it('Добавленный через drag&drop файл отображается в списке добавленных файлов и удаляутся по нажатию на "Удалить"', () => {
      cy.uploadValidFileviaDragDrop('validFile.jpg')
      cy.removeFile('validFile.jpg')
    })

    it('Добавленный через input файл отображается в списке добавленных файлов и удаляется по нажатию на "Удалить"', () => {
      cy.uploadValidFileviaInput('validFile.jpg')
      cy.removeFile('validFile.jpg')
    })

    it('При добавлении файла неподходящего формата появляется ошибка', () => {
      cy.uploadInvalidTypeFile('invalidTypeFile.json')
    })

    it('При добавлении файла больше 5МБ появляется ошибка', () => {
      cy.uploadTooLargeFile('tooLargeFile.pdf')
    })

    it('При добавлении файлов общим объемом более 20МБ появляется ошибка', () => {
      cy.uploadTotalTooLarge()
    })
  })

  context('Отправка сообщения', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('После отправки сообщения появляется модальное окно, в нем указан емэил получателя. Через 5 секунд появляется форма отправки сообщения, все поля которой пусты', () => {
      cy.typeInWholeMessage(Cypress.env('login'))
      cy.clickOnSubmit()
      cy.checkIfModalIsVisibleAndContainsEmail()
      cy.wait(5000)
      cy.checkIfAllInputsAreVisibleAndEmpty()
    })

    it('В списке отправленных сообщений появляется новое, у которого "Дата" и "Тема" соответствуют заполненным, при ошибке его статус меняется с "В процессе" на "Ошибка".', () => {
      cy.typeInWholeMessage('incorrect@test.com')
      cy.clickOnSubmit()
      cy.checkIncorrectSentMessage()
    })

    it('Отправка корректного сообщения, его статус меняется с "В процессе" на "Отправлено"', () => {
      cy.typeInWholeMessage(Cypress.env('login'))
      cy.clickOnSubmit()
      cy.checkCorrectSentMessage()
    })

  })
})
