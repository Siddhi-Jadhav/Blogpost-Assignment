import User from '../components/profile.component'
import { profile } from '../services/user.service'
import { useEffect, useState } from 'react'

const ProfilePage = (props) => {
  const[users, setUser] =  useState([])

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async() => {
    const result = await profile()
    if (result) {
      setUser(result)
    }
  }
  return (
    <div>
      <h1 className="header">User Profile</h1>
      {users.map((user) => {
      const {FirstName, LastName, email, password} = user
      return <User FirstName={FirstName} LastName={LastName} email={email} password={password} />
    })}
    
    </div>
  )
}

export default ProfilePage
