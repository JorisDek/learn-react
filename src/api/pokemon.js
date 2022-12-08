import axios from 'axios'

export default axios.create({
  headers: {},
  baseURL: 'https://pokeapi.co/api/v2/'
})