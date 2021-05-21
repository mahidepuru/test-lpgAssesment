
// // API Tests are not running in the cypress , hence this is example how we do API without mocking
// describe('API Test Suite', () => {
//     it('get Citys', () => {
//         cy.intercept('GET', 'https://my-json-server.typicode.com/leisurepassgroup/SDET-interview/citys').as('getCitys')
//         cy.wait(1500);
//         cy.wait('@getCitys').its('request.body').should('contain', 'Los Angeles','Sydney','Paris','New York')
//         cy.wait('@getCitys').its('response.statusCode').should('eq', 200)
//         cy.wait('@getCitys').its('response.body').should('include', 'id')

//     })

//     it('get attractions  by City id', () => {
//         cy.intercept('GET', 'https://my-json-server.typicode.com/leisurepassgroup/SDET-interview/attractions?cityId=1').as('getAttractions')
//         cy.wait(1500);
//         cy.wait('@getAttractions').its('request.body').should('contain', '9-11 Memorial & Museum','American Museum of Natural History')
//         cy.wait('@getAttractions').its('response.statusCode').should('eq', 200)
//         cy.wait('@getAttractions').its('response.body').should('include', 'cityId')
//         cy.wait('@getAttractions').its('response.body').should('include', 'title')
//         cy.wait('@getAttractions').its('response.body').should('include', 'id')

//     })


//     it('get attractions  by City id and type', () => {
//         cy.intercept('GET', 'https://my-json-server.typicode.com/leisurepassgroup/SDET-interview/attractions?cityId=1&type=MUSEUM').as('getMUSEUM')
//         cy.wait(1500);
//         cy.wait('@getMUSEUM').its('request.body').should('contain', 'Skyscraper Museum', 'Staten Island Childrens Museum')
//         cy.wait('@getMUSEUM').its('response.statusCode').should('eq', 200)
//         cy.wait('@getMUSEUM').its('response.body').should('include', 'cityId')
//         cy.wait('@getMUSEUM').its('response.body').should('include', 'rating')
//         cy.wait('@getMUSEUM').its('response.body').should('include', 'id')

//     })  
// })