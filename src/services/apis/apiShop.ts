import axios from "axios";

const apiShop = axios.create({
    baseURL: 'https://fortnite-api.com/v2/shop'
})

export { apiShop }

// https://dash.fortnite-api.com/