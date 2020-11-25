//remove photo
function setTodos(todos){
    return{
        type: "SET_TODOS",
        todos: todos
    }
}
function saveToken(token){
    return{
        type: "SAVE_TOKEN",
        token: token
    }
}
function logOut(){
    return{
        type: "LOG_OUT"
    }
}
export {saveToken, setTodos, logOut}