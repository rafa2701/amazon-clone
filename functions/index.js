const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HR8VuFicyDtdzD6VeZyyuxYOOG81VqEz1dlhQ887ecgYAJJ6WCuE8173s5GyHf6QctJfEp2wIds9XyzTde2UX3x00tM5iweIc"
);

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Router
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received for this amount:  ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the current currency
    currency: "usd",
  });

  //Ok, Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listend Command
exports.api = functions.https.onRequest(app);

//Example Endpoint
// http://localhost:5001/challenge-a252a/us-central1/api
