import axios from 'axios'



const myAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
        }
})


export default myAxios