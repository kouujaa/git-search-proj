import axios from "axios";

export default axios.create({
  baseURL: "https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth",
  headers: {
    "Content-type": "application/json",
  },
});
