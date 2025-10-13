import axios from "axios";

const API_URL = "http://localhost:8080/identity/users";

export default function createUser(data) {
  axios.post(API_URL, data);
}
