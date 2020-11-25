import React from "react"
class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            toggle: false,
            title: props.todo.title,
            description: props.todo.description,
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        console.log(this.props)
    }
    toggleEdit() {
        let toggle = !this.state.toggle
        this.setState({toggle: toggle})
    }
    handleChange(e){
        this.setState({title: e.target.elements.title.value, description: e.target.elements.description.value})
    }
    commitEdit(){
        let todo = {
            _id: this.props.todo._id,
            title: this.state.title,
            description: this.state.description,
            date: Date.now()
        }
        this.props.editTodo(this.props.token,todo)
        this.toggleEdit()
    }
    render() {
        if (!this.state.toggle) {
            return (
                    <div className="d-flex py-3">
                        <div className="mr-auto">
                            <h3>{this.state.title}</h3>
                            <p>{this.state.description}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => this.props.removeTodo(this.props.token, this.props.todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-warning"  onClick={() => this.toggleEdit()}>
                            <i className="fa fa-edit"></i>
                        </button>
                    </div>
            );
        }
        else {
            return (
                    <div className="d-flex">
                        <div className="mr-auto">
                            <input className="form-control" type="text" name="title"  onChange={e=> this.setState({title: e.target.value})} value={this.state.title} placeholder="Title"/>
                            <input className="form-control" type="text" name="description"  onChange={e=> this.setState({description: e.target.value})} value={this.state.description} placeholder="Description"/>
                        </div>
                        <button className="btn btn-danger" onClick={() => this.props.removeTodo(this.props.token, this.props.todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-success">
                            <i className="fa fa-check" onClick={() => this.commitEdit()}></i>
                        </button>
                    </div>
            )
        }
    }
}

export default Todo;