import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/login'

const loginService = async credentials => {
    const {response} = axios.post(baseUrl, credentials)
    return response
}

export default loginService;