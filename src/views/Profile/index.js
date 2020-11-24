import React from "react";
import AddTodo from "../../components/AddTodo"
import TodoList from "../../components/TodoList"
import Timer from "../../components/Timer"
import axios from "axios";
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.removeTodo = this.removeTodo.bind(this)
        this.postTodo = this.postTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }
    componentDidMount(){
        if(!this.props.token){
            this.props.history.push("/login")
        }
    }
    componentDidUpdate(){
        if(!this.props.token){
            this.props.history.push("/login")
        }
        console.log(this.props)
    }
    async removeTodo(token,todo){
        try {
            let todoID = {_id: todo._id}
            const data = await axios.delete("http://192.168.1.138:3000/api/todos",{headers:{
                "Content-Type":"application/json",
                "secret-token": token
            },data:{
                _id: todoID
            }}).then(data=>{
                this.props.setTodos(data.data.todos)
            })
        } catch (error) {
            throw error
        }   
    }
    async postTodo(token, todo){
        try{
        const data = await axios.post("http://192.168.1.138:3000/api/todos", todo, {headers:{
            "Content-Type":"application/json",
            "secret-token": token
        }}).then(data=>{
            this.props.setTodos(data.data.todos);
        })
        console.log(data)
        }
        catch(err){
            throw err;
        }
    }
    async editTodo(token, todo){
        try{
        const data = await axios.patch("http://192.168.1.138:3000/api/todos", todo,{headers:{
            "Content-Type":"application/json",
            "secret-token": token
        }})
    }
    catch(err){
        throw err;
    }
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-sm-7">
                <AddTodo addTodo={this.postTodo} token={this.props.token}/>
                <TodoList {...this.props} editTodo={this.editTodo} removeTodo={this.removeTodo}/>
                </div>
                <div className="col-sm-5">
                    <Timer/>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Profile;