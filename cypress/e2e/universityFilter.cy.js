import University from "../pages/university.api"
import data from "../fixtures/dataUniversity.json"

describe ("Demo Filter", () => {
    it("Search by Country" ,()  => {
        University.searchByCountry(data.country)
    })

    it("Search By Country and Name" ,() => {
        University.searchByCountryAndName(data.country, data.name)
    })

})