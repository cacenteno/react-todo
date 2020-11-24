import React from "react"
import NavBar from "./components/NavBar"
import { Route } from "react-router-dom"
import SignUp from "./views/SignUp"
import Login from "./views/Login"
import Home from "./views/Home"
import Profile from "./views/Profile"
// import PrivateRoute from "./components/PrivateRoute"
function Main (props) {
    return(
      <div className="App container">
        <NavBar token={props.token} logOut={props.logOut}></NavBar>
         <Route path="/" exact render={()=> (<Home/>)}/>
         <Route path="/login" render={({history})=>(<Login setTodos={props.setTodos} saveToken={props.saveToken}  history={history}/>)}/>
         <Route path="/signup" render={(({history})=>(<SignUp history={history}/>))}/>
         <Route path="/profile" render={({history})=>(<Profile {...props} history={history}/>)}/>
      </div>
    )
  }


export default Main;
