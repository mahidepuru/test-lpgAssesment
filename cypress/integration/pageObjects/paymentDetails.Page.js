import BasePage from "./basePage";

export class PaymentDetailsPage extends BasePage {
	constructor() {
		super();
	}
	get cardDetailsTitle() {
		return cy.get('[class*="checkout-form__card-details card-block"]');
	}
	get billingInfoTitle(){
		return cy.get('[class*="checkout-form__billing-information-block"');
	}
	
	get firstNameInput() {
		return 	cy.get('body').find('input#checkout-form-first-name');
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
			// find('input#checkout-form-last-name')
	this.firstNameInput.type('Mahi');
this.lastNameInput.type('Mahi');
this.mobilePhoneNumberInput.type('07777777777');

this.addressPostcodeInput.type('E62AA');
		this.termsAndCondCheckBox.click();
		cy.get('body').find('body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div.layout__region.layout__region--first > div > section.block.block-go-commerce.block-react-checkout-confirmation-segue.clearfix.block-wrapper > div > div > div > div > div > span').click();

		this.confirmPayment.click();
		
		// cy.$('[class*="lc-cart__title"]').getText('Your Cart')
		// cy.$('[class*="lc-cart__pass-product-name"]').getText('Your Cart')
		// cy.$$('[class*="lc-cart__items"]');

	}
	
}

export default PaymentDetailsPage;
