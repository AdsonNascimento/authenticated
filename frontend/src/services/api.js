import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333",
})

export const createSession = async (email, password) => {
    return api.post('/sessions', { email, password })
}

export async function createUser (name, birthday, email, password, confirmedPassword) {
    return await api.post('/user', {name, birthday, email, password, confirmedPassword})
}