import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Blog from '../components/blog.component'
import { getBlogs,getFilterBlogs } from '../services/blog.service'
import { Menu, MenuItem, MenuButton, MenuList } from '@reach/menu-button'
import "@reach/menu-button/styles.css"

const BlogListPage = (props) => {
  const { search } = props
  const[blogs, setBlogs] =  useState([])
  const [Record, setRecord] = useState('')


  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async() => {
    const result = await getBlogs()
    if (result) {
      console.log(result)
      setBlogs(result)
    }
  }


  const navigate = useNavigate()
  // logout
  const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')
    // redirect to signin
    navigate('/signin')
  }

  const loadFilterBlogs = async(search) => {
    if (Record.length === 0) {
      alert('Enter search value')
    }
    const result = await getFilterBlogs(search)
    if (result) {
      console.log(result)
      setBlogs(result)
    }
    else {
      alert('Blog not found')
    }
  }

return (
  
<div>
  <div>
    <Menu>
      <MenuButton style={{ float: 'right' }}>
        Dashboard
      </MenuButton>
      <MenuList>
        <MenuItem onSelect ={() => alert('Redirecting to your Profile')}><Link to="/profile" className='link'>My Profile</Link></MenuItem>
        <MenuItem onSelect={() => alert('Redirecting to create blog page')}><Link to="/blog-create" className='link'>Create Blog</Link></MenuItem>
        <MenuItem onSelect={() => alert('You will be logged out')} onClick={logout}>Logout</MenuItem>
      </MenuList> 
    </Menu>
    <h1 className="header"> Blog List </h1>
    <div>
      <input type='text' placeholder='search' onChange={(e)=>setRecord(e.target.value)} style={{ marginLeft: '50px', width:'40rem'}} />
      <button type='button' onClick={() =>loadFilterBlogs(search)} class='btn btn-success' style={{ marginLeft: '10px' }}>Search</button>
    </div>
    </div>
    {blogs.map((blog) => {
      const {id, title, content} = blog
      return <Blog id={id} title={title} content={content} />
    })}
  </div>
  )
}

export default BlogListPage
