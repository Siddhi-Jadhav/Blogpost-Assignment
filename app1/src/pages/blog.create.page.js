import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createBlog } from '../services/blog.service'

const CreateBlogPage = (props) => {
  // state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')


  const navigate = useNavigate()

  const onCreateBlog = async () => {
    if (title.length === 0) {
      alert('set title')
    } else if (content.length === 0) {
      alert('set content')
    } else {
      const result = await createBlog(title, content, tags)
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
      <h1 className="header">Create Blog</h1>
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
          <button onClick={onCreateBlog} className="btn btn-success">Save</button>
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

export default CreateBlogPage
