import React, { useState, useCallback } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

//Add Or Update Todos
//List Todos

const Todos = () => {
  const [state, setstate] = useState({
    todos: [],
  });
  const [addloading, setAddLoading] = useState(false);
  const [adddeleteloading, setDeleteloading] = useState(false);
  const [current, setCurrent] = useState(null);

  const saveTodo = (todoobj) => {
    setAddLoading(true);
    setTimeout(() => {
      //Check Add or update
      if (current) {
        //update
        setstate((oldState) => {
          return {
            todos: oldState.todos.map((todo) => {
              return todo.id === current.id ? todoobj : todo;
            }),
          };
        });
        setCurrent(null);
      } else {
        //add
        setstate((oldState) => {
          return {
            todos: oldState.todos.concat({ id: uuidv4(), ...todoobj }),
          };
        });
      }

      setAddLoading(false);
    }, 500);

    //setstate({ ...state, todos: [...state.todos, todoobj] });
  };

  const removeTodo = (id) => {
    setDeleteloading(true);
    setTimeout(() => {
      setstate((oldstate) => {
        return {
          todos: oldstate.todos.filter((todo, i) => {
            return id !== todo.id;
          }),
        };
      });
      setDeleteloading(false);
    }, 500);
  };

  const setCurrentTodo = (todo) => {
    setCurrent(todo);
  };

  //This is for memo use inside todolist component. Which prevents rerender when this component is updated
  const memoizedsaveTodo = useCallback(saveTodo, [current]);
  const memoizedremoveTodo = useCallback(removeTodo, []);
  const memoizedcurrentTodo = useCallback(setCurrentTodo, []);

  return (
    <div className="container">
      {console.log("Todo Main", state)}
      <h1 className="main-heading">Todos</h1>
      <TodoForm
        saveTodo={memoizedsaveTodo}
        loading={addloading}
        current={current}
      ></TodoForm>
      <TodoList
        todos={state.todos}
        loading={adddeleteloading}
        removeTodo={memoizedremoveTodo}
        currentTodo={memoizedcurrentTodo}
      ></TodoList>
    </div>
  );
};
export default Todos;
