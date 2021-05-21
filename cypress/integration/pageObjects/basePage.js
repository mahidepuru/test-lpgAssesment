export default class BasePage {
	constructor() {}

    open(path) {
        cy.visit(path)
}
}