import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key:"e079ff309f7a06f9988a5a5685d299a2"
    }
})