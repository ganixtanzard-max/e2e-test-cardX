import HomePage from "../pages/homePage"

describe ("Demo search CardX", () => {
beforeEach(() => {
    cy.visit('/')
})
    it("Search Wording CardX" ,()  => {
        HomePage.search()
    })

})