import axios from 'axios'

export const githubapi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer TOKEN',
  },
})
