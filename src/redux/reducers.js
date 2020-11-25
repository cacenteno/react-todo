const ToDoReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_TODOS":
            return action.todos
        default:
            return state;
    }
}
const tokenReducer = (state = '', action) => {
    switch (action.type) {
        case "LOG_OUT":
            return state = null;
        case "SAVE_TOKEN":
            return action.token
        default:
            return state;
    }
}
export { tokenReducer, ToDoReducer }