import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'https://nuts.runflare.run',
    headers: {
        "Content-Type": "application/json",
        Auth: "Bearer Token",
    }
})

export default apiRequests;