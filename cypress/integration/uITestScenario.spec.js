import HomePage from "./pageObjects/home.Page.js";
import PaymentDetailsPage from "./pageObjects/paymentDetails.Page.js";
import ReviewOrderPage from "./pageObjects/reviewOrder.Page.js"

describe('The Home Page',()=> {
    it ('navigate to easy site ',() => {
      cy.visit('https://gocity.com/boston/en-us');
      const usecaseone = new HomePage();
      usecaseone.navigateToallInclusive();
      usecaseone.chooseYourPass();
      const reviewScreen = new ReviewOrderPage();
      reviewScreen.checkOrderReview();
      const paymentScreen = new PaymentDetailsPage();
      paymentScreen.cartDetails();
    });
  });