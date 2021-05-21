import BasePage from "./basePage";

export class PaymentDetailsPage extends BasePage {
	constructor() {
		super();
	}
	get cardDetailsTitle() {
		return cy.get('[class*="checkout-form__card-details card-block"]');
	}
	get billingInfoTitle() {
		return cy.get('[class*="checkout-form__billing-information-block"');
	}

	get firstNameInput() {
		return cy.get('body').find('input#checkout-form-first-name');
	}
	get lastNameInput() {
		return cy.get('body').find('input#checkout-form-last-name');
	}
	get mobilePhoneNumberInput() {
		return cy.get('body').find('input#checkout-form-phone-number');
	}

	get addressPostcodeInput() {
		return cy.get('body').find('input#checkout-form-address');
	}

	get termsAndCondCheckBox() {
		return cy.get('body').find('input#checkout-form-terms');
	}

	get confirmPayment() {
		return cy.get('[class*="react-component"]  [data-testid="confirmOrderAndPay"]');
	}


	cartDetails() {
		this.cardDetailsTitle.should('contain', 'Card details');
		cy.get('iframe')
			.then(($iframe) => {
				const $body = $iframe.contents().find('body')
				cy.wrap($body).find('input#credit-card-number.number').type('5555555555554444');

				cy.wrap($body).find('input#expiration-month.expirationMonth')
					.type('1224');
				cy.wrap($body).find('input#expiration-year.expirationYear')
					.type('2025');
				cy.wrap($body).find('input#cvv.cvv').type('2555');
			});

		this.firstNameInput.type('Mahi');
		this.lastNameInput.type('Mahi');
		this.mobilePhoneNumberInput.type('07777777777');
		this.addressPostcodeInput.type('E62AA');
		this.termsAndCondCheckBox.click();
		this.confirmPayment.click();
	}

}

export default PaymentDetailsPage;
