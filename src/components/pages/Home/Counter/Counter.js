import React, { useState, useEffect, useCallback } from "react";
import CounterButtons from "./CounterButtons/CounterButtons";
import CounterList from "./CounterList/CounterList";

const Counter = (props) => {
  const [state, setstate] = useState({
    buttons: [],
  });
  const [list, setList] = useState({
    itemLists: [],
  });

  useEffect(() => {
    setstate({
      buttons: [
        ...state.buttons,
        {
          label: "Add5",
          val: 5,
        },
        {
          label: "Add 10",
          val: 10,
        },
        {
          label: "Subtract 5",
          val: -5,
        },
        {
          label: "Subtract 15",
          val: -15,
        },
      ],
    });
  }, []);

  const addItem = (item) => {
    // setList((old) => {
    //   return { ...old, itemLists: old.itemLists.concat([item]) };
    // });

    setList((state) => {
      return { itemLists: state.itemLists.concat(+item) };
    });
  };
  const removeItem = (id) => {
    setList((oldstate) => {
      return {
        ...oldstate,
        itemLists: oldstate.itemLists.filter((item, key) => {
          return key !== id;
        }),
      };
    });
  };

  const memoizedaddItem = useCallback(addItem, []);
  const memoizedremoveItem = useCallback(removeItem, []);

  return (
    <>
      <div className="btn btn-warning mb-2 d-block">
        Total:{" "}
        {list.itemLists.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        )}
      </div>

      {console.log(Math.random(), "Counter")}
      <div>
        <CounterButtons
          btns={state.buttons}
          additem={memoizedaddItem}
        ></CounterButtons>
      </div>
      <div>
        <CounterList
          items={list.itemLists}
          removeitem={memoizedremoveItem}
        ></CounterList>
      </div>
    </>
  );
};
export default React.memo(Counter);
