import University from "../pages/university.api"

describe ("Demo Filter", () => {
    it("Search by Country" ,()  => {
        University.searchByCountry('Thailand')
    })

    it("Search By Country and Name" ,() => {
        University.searchByCountryAndName('Thailand', 'Asia')
    })

})