This project was created as part of the 5-day react challenge from Clever Programmer and is a full function Amazon clone that can add items, give full subtotal, proceed to checkout and process payments.

## Amazon Clone

The project was made originally using React JS + Firebase  + Stripe Functions for full payment functionality, user login, orders management, etc.


## Custom API

A custom api has been made with node and express to bypass the Firebase limtiations on the Spark plan that forbids any outbound api calls to non google services and cuz Stripe was a third party API, an upgrade to the blaze plan was needed, but wasn't possible for me at the moment, so a custom node app was needed in order to create and API endpoint to make outbounds calls to the Stripe Payment API and sucessfully handle payments. So a Node/Express Custom API was created and hosted on Heroku to bypass the limitations and get the front end app working.

## Firebase API

A Preliminar version of the app uses the firebase cloud functions to handle the api calls with stripe, however to get this working a Blaze account is needed to get full access to the full cloud functions features.
