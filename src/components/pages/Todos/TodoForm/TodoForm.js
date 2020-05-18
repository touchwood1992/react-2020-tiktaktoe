import React, { useState, useEffect } from "react";
import Loader from "../../../common/Loader/Loader";

const TodoForm = (props) => {
  const { current } = props;

  const [state, setstate] = useState({ title: "", description: "" });
  const changeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (current) {
      setstate(current);
    }
  }, [current]);
  return (
    <>
      {console.log("Todo Form")}
      <form
        className="mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          props.saveTodo(state);
          setstate({ title: "", description: "" });
        }}
        autoComplete="off"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={changeHandler}
            className="form-control"
            id="title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={changeHandler}
            className="form-control"
            id="description"
            required
          />
        </div>
        <button className="btn btn-warning mr-2">
          {current ? "Update Todo" : "Add Todo"}
        </button>
        {props.loading ? <Loader></Loader> : null}
      </form>
    </>
  );
};
export default React.memo(TodoForm);
