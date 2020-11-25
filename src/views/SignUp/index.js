import React from 'react'
import axios from "axios"
function SignUp(props) {
    const handleSignUp = async (e)=>{
        //Finish this Sign Up handler
        e.preventDefault();
        var elements =e.target.elements
        var user ={
            first_name: elements.first_name.value,
            last_name: elements.last_name.value,
            email: elements.email.value,
            password: elements.password.value
        };
        //add axios call here
        var {data} = await axios.post("https://centenoacademy.org/api/signup",user,{headers:{"Content-Type":"application/json"}})
        //if successful props.history.push("/login")
        props.history.push("/login")
    }
    return (
      <form onSubmit={handleSignUp}>
          <div className="col-sm-5 py-5 px-5 mx-auto">
            <h2 className="text-center">Sign Up</h2>
            <input className="form-control mb-3" type="text" name="first_name" placeholder="First Name"/>
            <input className="form-control mb-3" type="text" name="last_name" placeholder="Last Name"/>
            <input className="form-control mb-3" type="text" name="email" placeholder="Email"/>
            <input className="form-control mb-3" type="password" name="password" placeholder="Password"/>
            <button className="btn btn-info text-white">Sign Up</button>
            <br/>   
          </div>
      </form>  
    )
}

export default SignUp
