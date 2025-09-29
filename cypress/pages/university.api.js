class University {

searchByCountry(country) {
    cy.request({
        method: 'GET',
        url: 'http://universities.hipolabs.com/search',
        qs: { country },
        failOnStatusCode: true
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        response.body.forEach((uni, index) => {
        expect(uni).to.have.property('country', country)
        cy.log(`${index + 1}. ${uni.name} (${uni.country})`)
    })
  })
}
  
  searchByCountryAndName(country, name) {
    cy.request({
      method: 'GET',
      url: 'http://universities.hipolabs.com/search',
      qs: { country, name },
      failOnStatusCode: true
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array') 
        response.body.forEach((uni, index) => {
        expect(uni).to.have.property('country', country)
        cy.log(`${index + 1}. ${uni.name} (${uni.country})`)
        })
    })
  }
}

export default new University()