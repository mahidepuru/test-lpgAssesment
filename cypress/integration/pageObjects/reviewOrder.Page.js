import BasePage from "./basePage";

export class ReviewOrderPage extends BasePage {
	constructor() {
		super();
	}

	get contentTitle() {
		return cy.get('[class*="content__title"]');
		// Review your order
	}

	get Title() {
		return cy.get('[class*="block-title"]');
		// When will you be visiting Boston?
	}

	get selectRandomDate() {
		return cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(6) > td:nth-child(1) > a');
	}

	get datePickerElement() {
		return cy.get('[class*="travel-date--calendar travel-date-element hasDatepicker"]');
	}
	get button() {
		return cy.get('[class*="button active"]').click();
	}

	get deliveryEmailAddressTitle() {
		return cy.get('[class*="heading__wrapper"]');
	}

	get emailIdInput() {
		return cy.get('[name*="email"]');
	}
	get continueButton() {
		return cy.get('[class*="button"]');

	}

	checkOrderReview(){
		this.contentTitle.should('contain', 'Review your order');
		this.Title.should('contain', 'When will you be visiting Boston?');
		this.datePickerElement.click();
		this.selectRandomDate.first().click();
		this.continueButton.first().click();
		this.deliveryEmailAddressTitle.should('contain', 'Delivery email address')
		this.emailIdInput.type('TestEmail@mailinator.com');

	}
}
export default ReviewOrderPage;
