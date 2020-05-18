import React from "react";
import TiktakItem from "./TiktakItem/TiktakItem";
import styles from "./style/tiktakItems.module.css";

const TiktakItems = (props) => {
  return (
    <>
      {console.log("TiktakItems")}
      <ul className={styles.tiktakItemContainer + " mt-3"}>
        {props.allItems.map((row, r) => {
          return (
            <li className={styles.row} key={`${r}`}>
              <ul>
                {row.map((col, c) => {
                  return (
                    <TiktakItem
                      val={props.allItems[r][c]}
                      row={row}
                      col={col}
                      key={`${r}${c}`}
                      clickedCell={() => props.cellClick(r, c)}
                      activeClass={col === "r" ? "r" : col === "c" ? "c" : ""}
                    ></TiktakItem>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default React.memo(TiktakItems);
