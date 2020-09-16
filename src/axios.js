import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://us-central1-challenge-a252a.cloudfunctions.net/api' 
    // API local cloud function url http://localhost:5001/challenge-a252a/us-central1/api
});

export default instance;