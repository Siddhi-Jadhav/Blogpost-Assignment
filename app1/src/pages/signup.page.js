import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/user.service'

const SignupPage = (props) => {
  // keep email
  const [FirstName, setFirstname] = useState('')
  const [LastName, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // for navigation
  const navigate = useNavigate()

  const onSignup = async () => {
    if (FirstName.length === 0) {
      alert('please enter username')
    } else if (LastName.length === 0) {
      alert('please enter password')
    } else if (email.length === 0) {
        alert('please enter password')
    } else if (password.length === 0) {
          alert('please enter password')
    } else {
      // make the signup API call
      const result = await signup(FirstName, LastName, email, password)
      if (result) {
        // go to signin
        navigate('/signin')
      }
    }
  }

  return (
    <div>
      <h1 className="header">Signup</h1>
      <div className="form">
      <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFirstname(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLastname(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
          />
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
            Already have an account ? Signin <Link to="/signin">here</Link>
          </div>
          <button onClick={onSignup} className="btn btn-success">
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
