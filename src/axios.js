import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/stripeAPI", //Own Api
  // API local cloud function url http://localhost:5001/challenge-a252a/us-central1/api
  // Firebase API (Blaze Plan needed) baseURL: 'https://us-central1-challenge-a252a.cloudfunctions.net/api'
});

export default instance;
