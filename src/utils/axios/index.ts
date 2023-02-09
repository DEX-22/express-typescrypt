import axios from 'axios'



const myAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
        }
})


export default myAxios