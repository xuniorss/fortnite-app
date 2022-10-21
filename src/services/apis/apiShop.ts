import axios from "axios";

const api = axios.create({
    baseURL: 'https://fortnite-api.com/v2/shop/br'
})

export { api }

// https://dash.fortnite-api.com/