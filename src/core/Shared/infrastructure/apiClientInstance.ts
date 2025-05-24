import axios, { AxiosInstance } from 'axios'

export const apiClientInstance = (): AxiosInstance => {
  const instance = axios.create({ baseURL: 'https://dulces-petalos.jakala.es/' })
  return instance
}
