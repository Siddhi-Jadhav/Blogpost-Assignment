import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../services/user.service'
import { getBlogs } from '../services/blog.service'
const SigninPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onSignin = async () => {
    if (email.length === 0) {
      alert('set username')
    } else if (password.length === 0) {
      alert('set password')
    } else {
      const result = await signin(email, password)
      if (result) {
        const { token } = result
        // sessionStorage
        sessionStorage['token'] = token
        sessionStorage['email'] = email
        //console.log(token)
        // redirect to blog list
        navigate('/blog-list')
        getBlogs()
      } else {
        alert('invalid email or password')
      }
    }
  }

  return (
    <div>
      <h1 className="header">Signin</h1>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <div>
            No account ? Register <Link to="/signup">here</Link>
          </div>
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
