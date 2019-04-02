import axios from "axios";

const setAuthToken = token => {
  if (token) {
    /// apply to every request
    return axios.defaults.headers.common["Authorization"] = token;
    console.log( axios.defaults.headers.common["Authorization"])
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
