import axios from "axios";

const instance = axios.create({
  baseURL: "https://stripe-api-2701.herokuapp.com/stripeAPI", //Own Api
  // API local cloud function url http://localhost:5001/challenge-a252a/us-central1/api
  // Firebase API (Blaze Plan needed) baseURL: 'https://us-central1-challenge-a252a.cloudfunctions.net/api'
});

export default instance;
