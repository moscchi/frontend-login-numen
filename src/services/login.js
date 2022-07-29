import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/login'

const loginService = async credentials => {
    const {data} = await axios.post(baseUrl, credentials)
    return data
}

export default loginService;