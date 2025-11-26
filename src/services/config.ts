import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'http://api.irnst.ir',
    headers: {
        "Content-Type": "application/json",
        Auth: "Bearer Token",
        "Cache-Control": "no-cache"
    }
})

export default apiRequests;