import axios from 'axios'
//import { environment } from '../../environment'


export const UserClient = axios.create({
    baseURL:'http://localhost:7000',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})