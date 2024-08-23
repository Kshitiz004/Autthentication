import axios from 'axios';

export const registeredUsers = async (userName: string, password: string, role: string) => {
    return axios.post (`/api/auth/registeredUsers`, {userName: userName, password: password, role: role})
}

export const loginUser = async (userName: string, password: string) => {
    return axios.post(`/api/auth/login`, {userName: userName, password: password})
}