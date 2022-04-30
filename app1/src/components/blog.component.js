import { useNavigate } from 'react-router-dom'
import { deleteBlog, updateBlog } from '../services/blog.service'


const Blog = (props) => {
  const { id, title, content, tags } = props
  const navigate = useNavigate()

  const onDeleteBlog = async () => {
      const result = await deleteBlog(id)
      console.log(result)
      if (result) {
        console.log(`Blog is deleted`)
        navigate('/blog-list')
      } else {
        alert('something went wrong')
      }
    }


    const onUpdateBlog = async(id)=>{
      console.log(id)
      navigate('/blog-update/'+id)
    }

  return (
    <div className="card" style={{width: '25rem', display:'inline-block', margin:'20px'}}>
    <div className="card-body">
    <h5 className = "card-title"> {title}</h5>
    <p className="card-text">{content}</p>
    <p className="card-text">{tags}</p>
    <button onClick={onDeleteBlog} className="btn btn-danger">Delete</button>
    <button onClick={()=> onUpdateBlog(id)} className="btn btn-success" style={{ marginLeft: '15px' }}>Edit</button>
    </div>
  </div>
  )
}

export default Blog
