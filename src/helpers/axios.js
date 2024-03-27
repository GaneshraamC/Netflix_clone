import axios from "axios";

const requests = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});


export default requests;
