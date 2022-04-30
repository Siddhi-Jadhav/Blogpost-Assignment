
const User = (props) => {
    const { FirstName, LastName, email, password } = props
   
    return (
      <div className="card">
      <div className="card-body">
      <h5 className = "card-FirstName"> {FirstName}</h5>
      <h5 className="card-LastName">{LastName}</h5>
      <h5 className="card-email">{email}</h5>
      <h5 className="card-password">{password}</h5>
      </div>
    </div>
    )
  }
  
  export default User