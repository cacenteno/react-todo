import axios from 'axios';
import React from 'react'

function Login(props) {
    const handleLogin = async (e)=>{
        try{
        e.preventDefault();
        let elements = e.target.elements;
        let user ={
            email:elements.email.value,
            password: elements.pwd.value
        }
        const {data} = await axios.post("http://192.168.1.138:3000/api/login", user,{headers:{
            "Content-Type": "application/json"
        }})
        const todos = await axios.get("http://192.168.1.138:3000/api/todos",{headers:{
            "Content-Type": "application/json",
            "secret-token": data.token
        }})
       props.saveToken(data.token)
       props.setTodos(todos.data.todos)
       props.history.push("/profile")
    }
    catch(err){
        throw err;
    }
    }
    return (
       <form onSubmit={handleLogin}>
           <div className="col-sm-5 mx-auto py-5 px-4">
               <h2 className="text-center mb-3">Log In</h2>
               <input type="text" name="email" className="form-control mb-3" placeholder="Email"/>
               <input type="password" name="pwd" className="form-control mb-3" placeholder="Password"/>
               <div className="mx-auto px-4">
               <button className="btn btl-lg btn-info">Log In</button>
               </div>
           </div>
       </form> 
    )
}

export default Login
