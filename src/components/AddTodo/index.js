import React, {Component} from "react"

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        let todo = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
        }
        let elements = document.getElementsByTagName("form")[0].elements
        for(var elem in elements){
            if(elem < 3){
                elements[elem].value = ''
            }
        }
        this.props.addTodo(this.props.token,todo)
        console.log(todo)
    }
    render() { 
        return (
        <div className="row">
            <form onSubmit={this.handleSubmit}>
            <div className="col-sm card">
                <input className="form-control mb-2" type="text" name="title" placeholder="To Do Title"/>
                <input className="form-control" type="text" name="description" placeholder="Enter item description..."/>
                <button className="btn btn-info">Add To Do</button>
            </div>
            </form>
        </div>
        );
    }
}
 
export default AddTodo;