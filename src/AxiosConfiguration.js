import Axios from "axios";


export default Axios.create({
  baseURL: 'https://35.185.178.16:8090',
  withCredentials: true,
  headers: {
    common: {
      Accept: 'application/json',
        Authorization: ''
    },
  }
})
