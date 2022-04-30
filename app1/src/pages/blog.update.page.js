import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getBlogs, updateBlog } from '../services/blog.service'
import Blog from '../components/blog.component'


const BlogUpdatePage = (props) => {
  //const { id } = props
  // state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const[tags, setTags ] =useState('')
  const navigate = useNavigate()
  const onUpdateBlog = async (id) => {
    if (title.length === 0) {
      alert('set title')
    } else if (content.length === 0) {
      alert('set content')
    } else {
      const result = await updateBlog(id, title, content, tags)
      if (result) {
        // redirect to Blog list
        navigate('/Blog-list')
      } else {
        alert('something went wrong')
      }
    }
  }

  return (
    <div>
      <h1 className="header">Update Blog</h1>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">content</label>
          <textarea
            onChange={(e) => {
              setContent(e.target.value)
            }}
            rows={5}
            type="text"
            className="form-control"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input
            onChange={(e) => {
              setTags(e.target.value)
            }}
            type="text"
            className="form-control"
          />{' '}
        </div>
        

        <div className="mb-3">
          <button onClick={onUpdateBlog} className="btn btn-success">Update</button>
          <Link
            to="/Blog-list"
            style={{ marginLeft: '10px' }}
            className="btn btn-danger">Cancel
          </Link>
        </div>
      </div>
    </div>
  )
  }
  
  export default BlogUpdatePage
  