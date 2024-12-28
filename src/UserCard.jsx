import "./user.css"

function UserCard({name, email, age}) {
  return (
    <div className="user">
      <h1>Props Example</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default UserCard