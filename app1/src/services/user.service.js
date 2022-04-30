import axios from 'axios'
import { settings } from '../config'

export const signup = async (FirstName, LastName, email, password) => {
  const url = settings.server + '/user/signup'
  let result
  try {
    result = await axios.post(url, {
      FirstName,
      LastName,
      email,
      password,
    })
    result = result.data
  } catch (ex) {
    result = ex
  }

  return result
}

export const signin = async (email, password) => {
  const url = settings.server + '/user/signin'

  let result
  try {
    result = await axios.post(url, {
      email,
      password,
    })
    result = result.data
  } catch (ex) {
    console.log(ex)
  }

  return result
}

export const profile = async () => {
  const url = settings.server + `/user/profile`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.get(url, 
      {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    response = response.data
    console.log(response)
  } catch (ex) {
    console.log(ex)
  }

  return response
}

