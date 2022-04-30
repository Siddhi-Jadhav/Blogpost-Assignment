import axios from 'axios'
import { settings } from '../config'

export const getBlogs = async () => {
  const url = settings.server + `/blog/`
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
  } catch (ex) {
    console.log(ex)
  }

  return response
}

export const getFilterBlogs = async (search) => {
  const url = settings.server + `/blog?${search}`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.get(url,
      {search},
      {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    response = response.data
  } catch (ex) {
    console.log(ex)
  }

  return response
}


export const createBlog = async (title, content, tags) => {
  const url = settings.server + '/blog/'
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.post(
      url,
      {
        title,
        content,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    response = response.data
  } catch (ex) {
    console.log(ex)
  }
  return response
}

export const deleteBlog = async(id) => {
  const url = settings.server + `/blog/${id}`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.delete(url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    response = response.data
    //console.log(response)
  } catch (ex) {
    console.log(ex)
  }

  return response
}

export const updateBlog = async(id, title, content, tags) => {
  
  const url = settings.server + `/blog/${id}`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.put(url,
      {
        title,
        content,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log('hi')
    response = response.data
    console.log(response)
  } catch (ex) {
    console.log(ex)
  }

  return response
}