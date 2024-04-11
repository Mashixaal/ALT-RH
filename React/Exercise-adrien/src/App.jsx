import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
         .then( response => response.json())
         .then( data => setUsers(data))
         .catch(error => console.error('Error ', error)) 
    },[])

  return (
    <div>
        <h1> Liste Utilisateur : </h1>
        {users.map(user=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default UserList