import {google} from "../locator/google.locator"
import data from "../fixtures/dataGoogle.json"


class HomePage {
    search(){
cy.get(google.textboxSearch)
    .clear()
    .type(data.inputTextSearch, {delay:200})
    .should('have.value', data.inputTextSearch)
    .wait(3000)
    .type('{enter}')

cy.get('h3', { timeout: 30000 })
    .first()
    .should('contain.text', data.inputTextSearch)
}

}

export default new HomePage()