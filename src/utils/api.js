import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "6286d2c783msh15f1145015e6321p1d97dejsn9a7781ea9c2e",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
