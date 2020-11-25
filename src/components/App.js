import Main from "../Main"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import { withRouter } from "react-router-dom"
import {saveToken, setTodos, logOut} from "../redux/actions"
function mapStateToProps(state){
    return{
        token: state.token,
        todos: state.todos
    }
}
function mapDispatchToProps (dispatch){
    return bindActionCreators({saveToken, setTodos, logOut},dispatch)
}
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App;