//import logo from './logo.svg';
//let ss=todos[todos.length];
//console.log(ss);
import './App.css';
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {

    console.log("im on delete of todo", todo);
    /*deleting this wy doesn't works in react
    let index =todos.indexOf(todo);
    todos.splice(index,1);*/
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    console.log("im adding this todo", title, desc);
  }
  //let variable=3434;
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="MyTodos list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                <Footer /></>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
//Plant a love that blooms with time, not that which wither after copulating.
//   {/comenting these to save the data in local storage
  //     sno:1,
  //     title: "goto the market",
  //     desc: "you must go to thmarket to buy condom"
  //   },
  //   {
  //     sno:2,
  //     title: "goto the sho[",
  //     desc: "you must go to thmarket to buy condom"
  //   },
  //   {
  //     sno:3,
  //     title: "goto the palor",
  //     desc: "you must go to thmarket to buy condom"
  //   },