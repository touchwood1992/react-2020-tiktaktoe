import React from "react";
const CounterButtonItem = (props) => {
  return (
    <>
      {console.log(Math.random(), "Counter Button Item")}

      <button
        className="btn btn-warning mr-2 mt-2"
        onClick={() => props.additem(props.item.val)}
      >
        {props.item.label}
      </button>
    </>
  );
};
export default CounterButtonItem;
