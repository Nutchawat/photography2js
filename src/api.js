import axios from 'axios'
const env = require('src/../env')
var location = window.location
var baseURL = (process.env.NODE_ENV !== 'development') ? location.protocol + '//' + location.host + '/' : env.defaultBaseURL

export let instance = function () {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

export const endpoint = env.apiVersion
export const isMock = (process.env.NODE_ENV !== 'production' && env.mocker)
export const isMockLogin = (process.env.NODE_ENV !== 'production' && env.mockerLogin)

export const generator = (mocker) => {
  return Promise.resolve({
    request: {
      response: JSON.stringify(mocker)
    }
  })
}
