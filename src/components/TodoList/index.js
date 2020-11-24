import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
const TodoList = (props) => {
    function handleDragEnd(result){
        const items = Array.from(props.todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        console.log(result.destination)
        items.splice(result.destination.index,0,reorderedItem);
        props.setTodos(items)
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="ToDos">
                {(provided) => (
                    <ul className="pl-0"{...provided.droppableProps} style={{listStyleType: "none"}} ref={provided.innerRef}>
                        {
                            props.todos[0] ?
                                props.todos.map((todo, index) => {
                                    return (<Draggable key={todo._id} draggableId={todo._id} index={index}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <Todo {...props} todo={todo} />
                                            </li>
                                        )}
                                    </Draggable>)
                                })
                                :
                                null
                        }
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default TodoList;