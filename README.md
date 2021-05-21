# test-lpgAssesment
Test for new job

Test Guide Document:

step 1 : Install node js latest version

step 2: Then clone the repository

step 3 : And npm i

Step 4 : Once clone and navigate to the location and run the below command to run the test

         npm run test

Step 5 : cypress window opens click on run all tests

Then test will run in the cypress window wit chrome driver - chrome browser should be installed already in computer 


# UI Tests are implemented as below: 


* Navigate to the home page and click on All inclusive

* And validate title and text

* Them click on option 2 from the day pass product section

* And click on adult pass

* Then validate discount text and - signs as prices are differs

* And also reviewin the order

* And choose and payment section - Iframe

* And complete the cardpayment details - this will fail as its production site

* Then fill the user details and click complete button



# Note: due to the production site I am unable to complete the payment page, 
created a simple and genric page object model framework with the cypress, hence the improvements can be done by enchancing the framework


# API Test Manual Tests:


Test implemented as simple reuesting call from the given swagger

Test Case 1 : GET CITYS

* 'GET', 'https://my-json-server.typicode.com/leisurepassgroup/SDET-interview/citys')

* Validate status code

* validate application / json

* Validate request is received the pay load of cities


* Validated data - 'Los Angeles', 'Sydney', 'Paris', 'New York'


# Test Case 2 : GET Attraction with CITYID

* 'GET', 'https://my-json-server.typicode.com/leisurepassgroup/SDET-interview/attractions?cityId=1'

* Request with city id = 1 and validate payload JSON

* Validate status code

* validate application / json

* Validate request is received the pay load


* validate response data have below details

'9-11 Memorial & Museum'
'American Museum of Natural History

* Validate response have id's

* Validate response have ratings


# Test Case 3 : GET Attraction with CITYID and Attraction type

* 'GET', 'https://my-json-server.typicode.com/leisurepassgroup/SDET-interview/attractions?cityId=1&type=MUSEUM').

* Request with city id = 1 and Type MUSEUM

* Validate status code

* validate application / json

* Validate request is received the pay load

* validate response data have below details

'Skyscraper Museum'

'Staten Island Childrens Museum

* Validate response have id's

* Validate response have ratings

