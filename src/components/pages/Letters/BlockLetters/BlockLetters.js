import React from "react";
import styles from "./BlockLetters.module.css";
import BlockLetterItem from "./BlockLetterItem/BlockLetterItem";
const BlockLetters = (props) => {
  console.log("Block Letters List");
  return (
    <ul className={styles.BlockLetterContainer}>
      {props.letters.split("").map((l, index) => (
        <BlockLetterItem
          key={index}
          letter={l}
          removeLetter={() => props.removeLetter(index)}
        ></BlockLetterItem>
      ))}
    </ul>
  );
};
export default BlockLetters;
