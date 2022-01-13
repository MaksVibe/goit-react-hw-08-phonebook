import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getData = (endpoint) => {
  return axios.get(endpoint);
};

const saveItem = (endpoint, item) => {
  return axios.post(endpoint, item);
};

const deleteItem = (endpoint, id) => {
  console.log(`id`, id);
  return axios.delete(`${endpoint}/${id}`);
};

export { getData, saveItem, deleteItem };
