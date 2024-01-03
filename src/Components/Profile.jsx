

import React,{useContext} from 'react'



function Profile() {
  const {user} =useContext(UserContext)

  
  if (!User) return <h1>Please fill this form</h1>

  return <h1> wlecl :{ user.username}</h1>
}

export default Profile