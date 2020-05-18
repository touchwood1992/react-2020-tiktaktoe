import React from "react";
import CounterListItem from "./CounterListItem/CounterListItem";
const CounterList = ({ removeitem, items }) => {
  return (
    <ul className="list-group mt-2 alllists">
      {console.log(Math.random(), "Counter List")}
      {items.map((item, index) => (
        <CounterListItem
          key={index}
          item={item}
          removeitem={() => removeitem(index)}
        ></CounterListItem>
      ))}
    </ul>
  );
};
export default React.memo(CounterList);
