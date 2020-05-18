import React from "react";
const ResetGame = (props) => {
  console.log("RESET GAME");
  return (
    <button className="btn btn-danger mb-2" onClick={props.resetGame}>
      Reset Game
    </button>
  );
};
export default React.memo(ResetGame);
