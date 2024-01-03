import React from "react";
import { useState , useContext  } from "react";
function Login() {
  const [username, setusername] = useState("");
  const [Password, setPassword] = useState("");
  const {setUser} = useContext(userContext)
  const onHandle =(e)=>{
    e.prevenDeaafult()

    setusername(username, Password)

  }



  return (
    <div>
      <h1>Login </h1>
      <input
        value={username}
        onChange={(e) => setusername(e.target.value)}
        type="text"
        placeholder="UserName"
      />

      {''}


      <br />
      <br />
      <input 
      type="password"
      placeholder="Password"
      onChange={(e)=> setPassword(e.target.value)}
      value={Password} 
      
       />
<br />
<br />
<button onClick={onHandle}>Submit</button>
<br />
<br />


    </div>
  );
}

export default Login;
