//import React from 'react'
import React, { useState } from 'react';
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        
        e.preventDefault();//this prevents page from being reloaded
        if(!title || !desc)//title khale hos ya desc yo alert kam garxa
        {
            alert("title or desc can't be blank");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
        //props.addTodo(title,desc);//this props can change value from one .js file to another so 
        // this is adding title & desc in the list of todoitem
        //destructiong garya hai app.js line 40 kolage soo props hata ko

    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">TODO Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
//aria-describedby="emailHelp"