import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/ecommerce-page-3747e/us-central1/api'
});

export default  instance;