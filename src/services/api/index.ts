import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
})

const viaCepApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_VIACEP_API_URL}`,
})

export { api, viaCepApi }
