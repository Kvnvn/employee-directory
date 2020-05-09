import axios from "axios";

export default {
  getAllEmployee: () => {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  },
};