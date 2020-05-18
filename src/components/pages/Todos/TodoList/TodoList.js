import React from "react";
import TodoItem from "./TodoItem/TodoItem";
const TodoList = (props) => {
  const { todos, removeTodo, currentTodo } = props;

  return (
    <>
      {console.log("Todo list")}
      <h3 className="mt-3 text-uppercase">All your Todos</h3>
      <ul className="list-group mt-3">
        {todos.length === 0 ? (
          <li className="list-group-item">No todo Found</li>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodoItem={() => removeTodo(todo.id)}
              setCurrentTodoItem={() => currentTodo(todo)}
              loading={props.loading}
            ></TodoItem>
          ))
        )}
      </ul>
    </>
  );
};
export default React.memo(TodoList);
