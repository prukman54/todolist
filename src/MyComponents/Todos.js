import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    let mystyle={
        minheight: "70vh"
    }
    return (
        <div className="container my-2" style={mystyle}>
            <h3 className="text-center">todos list</h3>
            {props.todos.length===0?"no todos to display":
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
            
            {/* {props.todos} */}
        </div>
    )
}
//this si file for whole todos in our list