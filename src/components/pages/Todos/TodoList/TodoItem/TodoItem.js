import React, { useState } from "react";
import Loader from "../../../../common/Loader/Loader";
const TodoItem = (props) => {
  const { todo, removeTodoItem, loading, setCurrentTodoItem } = props;
  const [state, setState] = useState(false);
  return (
    <>
      {console.log("Todo item")}
      <li className="list-group-item">
        <div>Title: {todo.title} </div>
        <div>Description: {todo.description} </div>
        <div className="action">
          <button className="btn btn-warning mr-2" onClick={setCurrentTodoItem}>
            Edit{" "}
          </button>
          <button
            className="btn btn-warning mr-2"
            onClick={() => {
              setState(true);
              removeTodoItem();
            }}
          >
            Remove
          </button>
          {loading && state === true ? <Loader /> : null}
        </div>
      </li>
    </>
  );
};
export default TodoItem;
