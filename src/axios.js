import axios from "axios";

const instance = axios.create ({
    baseURL='...' // API clous function url
});

export default instance;