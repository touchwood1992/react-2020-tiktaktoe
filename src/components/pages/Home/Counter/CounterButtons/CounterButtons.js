import React from "react";
import CounterButtonItem from "./CounterButtonItem/CounterButtonItem";
const CounterButtons = (props) => {
  return (
    <>
      {console.log(Math.random(), "Counter Buttons")}

      {props.btns.map((item, index) => {
        return (
          <CounterButtonItem
            key={index}
            item={item}
            additem={props.additem}
          ></CounterButtonItem>
        );
      })}
    </>
  );
};
export default React.memo(CounterButtons);
