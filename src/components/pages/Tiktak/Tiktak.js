/*
===BELOW CODE RERENDERS MANY TIMES===
*/
/*
import React, { useState, useEffect, useRef } from "react";
import TiktakItems from "./TiktakItems/TiktakItems";
const Tiktak = () => {
  const [state, setState] = useState([]);
  const [matrixLength, setMatrixLength] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("c");
  const [winner, setWinner] = useState(false);
  const clickRef = useRef(null);

  useEffect(() => {
    setState(() => {
      const newMatrixAr = Array(matrixLength).fill(null);

      newMatrixAr.forEach((m, i) => {
        for (let i = 0; i < matrixLength; i++) {
          newMatrixAr[i] = Array(matrixLength).fill(null);
        }
      });

      return newMatrixAr;
    });
    setCurrentPlayer("c");
    setWinner(false);
    clickRef.current = null;
  }, [matrixLength, winner]);

  useEffect(() => {
    if (clickRef.current) {
      //Check for winner
      const prevRow = clickRef.current.r;
      const prevCol = clickRef.current.c;

      //check winning array

      const rowCheck = [];
      state.forEach((row, rindex) => {
        return row.forEach((column, cindex) => {
          if (rindex === prevRow) {
            rowCheck.push(column);
          }
        });
      });
      if (rowCheck.every((i) => i === currentPlayer)) {
        setWinner(true);
        return;
      }

      const colCheck = [];
      state.forEach((row, rindex) => {
        return row.forEach((col, cindex) => {
          if (cindex === prevCol) {
            colCheck.push(col);
          }
        });
      });
      if (colCheck.every((i) => i === currentPlayer)) {
        setWinner(true);
        return;
      }

      const leftBottomRightDiagonal = [];
      state.forEach((row, rindex) => {
        return row.forEach((col, cindex) => {
          if (rindex === cindex) leftBottomRightDiagonal.push(col);
        });
      });
      if (leftBottomRightDiagonal.every((i) => i === currentPlayer)) {
        setWinner(true);
        return;
      }

      const RightToBottomLeft = [];
      state.forEach((row, rindex) => {
        return row.forEach((column, cindex) => {
          if (rindex + cindex === row.length - 1) {
            RightToBottomLeft.push(column);
          }
        });
      });
      if (RightToBottomLeft.every((i) => i === currentPlayer)) {
        setWinner(true);
        return;
      }

      //Game Over Check
      const gameOver = state.findIndex((r) => {
        return r.includes(null);
      });

      if (gameOver === -1) {
        alert("Game Over");
        return;
      }

      //Next Player Turn
      setCurrentPlayer(currentPlayer === "c" ? "r" : "c");
    }
  }, [state]);

  const cellClickHandler = (r, c) => {
    //Check This Cell is Empty
    if (state[r][c]) {
      alert("Already Filled");
    } else {
      //Change State
      const copyoldState = [...state];
      const copyRow = [...copyoldState[r]];
      copyRow[c] = currentPlayer;
      copyoldState[r] = copyRow;
      clickRef.current = { r, c };
      setState(copyoldState);
    }
  };

  const changeMatrixHandler = (length) => {
    setMatrixLength(length);
  };

  return (
    <>
      {console.log("Tiktak Main Page")}
      <div className="container">
        <h1 className="main-heading">TikTakToe</h1>
        <div className="text-center mt-5">
          <button
            onClick={() => {
              changeMatrixHandler(3);
            }}
            className="btn btn-warning mr-2"
          >
            3*3 Game?
          </button>
          <button
            onClick={() => {
              changeMatrixHandler(4);
            }}
            className="btn btn-warning mr-2"
          >
            4*4 Game?
          </button>
          <button
            onClick={() => {
              changeMatrixHandler(5);
            }}
            className="btn btn-warning mr-2"
          >
            5*5 Game?
          </button>
          <button
            onClick={() => {
              changeMatrixHandler(6);
            }}
            className="btn btn-warning"
          >
            6*6 Game?
          </button>
        </div>
        <TiktakItems
          allItems={state}
          cellClick={cellClickHandler}
        ></TiktakItems>
      </div>
    </>
  );
};
export default Tiktak;
*/

/*
===BELOW CODE DOES NOT RERENDER MANY TIMES===
*/
import React, { useState, useEffect, useCallback } from "react";
import TiktakItems from "./TiktakItems/TiktakItems";
import { toast } from "react-toastify";
import ResetGame from "./ResetGame/ResetGame";

const Tiktak = () => {
  const [state, setState] = useState([]);
  const [matrixLength, setMatrixLength] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("c");
  const [winner, setWinner] = useState(null);
  const [gameover, setGameover] = useState(false);

  const resetInitialState = (matrixLength) => {
    setMatrixLength(matrixLength);
    setState(() => {
      const newMatrixAr = Array(matrixLength).fill(null);

      newMatrixAr.forEach((m, i) => {
        for (let i = 0; i < matrixLength; i++) {
          newMatrixAr[i] = Array(matrixLength).fill(null);
        }
      });

      return newMatrixAr;
    });
    setCurrentPlayer((oldCurrentPlayer) => {
      return oldCurrentPlayer === "c" ? "r" : "c";
    });
    setWinner(false);
    setGameover(false);
  };

  useEffect(() => {
    resetInitialState(matrixLength);
  }, []);

  //Cell Click Make all logic here...
  const cellClickHandler = (r, c) => {
    if (winner || gameover) {
      return;
    }

    //Check This Cell is Empty
    if (state[r][c]) {
      toast.error(`Already selected`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      //Change State
      const copyoldState = [...state];
      const copyRow = [...copyoldState[r]];
      copyRow[c] = currentPlayer;
      copyoldState[r] = copyRow;

      //check winning array

      const rowCheck = [];
      copyoldState.forEach((row, rindex) => {
        return row.forEach((column, cindex) => {
          if (rindex === r) {
            rowCheck.push(column);
          }
        });
      });
      if (rowCheck.every((i) => i === currentPlayer)) {
        setWinner(currentPlayer);
        //Change state of array
        setState(copyoldState);
        return;
      }

      const colCheck = [];
      copyoldState.forEach((row, rindex) => {
        return row.forEach((col, cindex) => {
          if (cindex === c) {
            colCheck.push(col);
          }
        });
      });
      if (colCheck.every((i) => i === currentPlayer)) {
        setWinner(currentPlayer);
        //Change state of array
        setState(copyoldState);
        return;
      }

      const leftBottomRightDiagonal = [];
      copyoldState.forEach((row, rindex) => {
        return row.forEach((col, cindex) => {
          if (rindex === cindex) leftBottomRightDiagonal.push(col);
        });
      });
      if (leftBottomRightDiagonal.every((i) => i === currentPlayer)) {
        setWinner(currentPlayer);
        //Change state of array
        setState(copyoldState);
        return;
      }

      const RightToBottomLeft = [];
      copyoldState.forEach((row, rindex) => {
        return row.forEach((column, cindex) => {
          if (rindex + cindex === row.length - 1) {
            RightToBottomLeft.push(column);
          }
        });
      });
      if (RightToBottomLeft.every((i) => i === currentPlayer)) {
        setWinner(currentPlayer);
        //Change state of array
        setState(copyoldState);
        return;
      }

      //Game Over Check
      const gameOver = copyoldState.findIndex((r) => {
        return r.includes(null);
      });

      if (gameOver === -1) {
        setGameover(true);
        //Change state of array
        setState(copyoldState);
        return;
      }

      setState(copyoldState);
      //Next Player Turn
      setCurrentPlayer(currentPlayer === "c" ? "r" : "c");
    }
  };

  //Change Matrix
  const changeMatrixHandler = (length) => {
    resetInitialState(length);
  };

  //Winner Message
  useEffect(() => {
    if (winner) {
      toast.success(`Winner is ${currentPlayer.toUpperCase()}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [winner, currentPlayer]);

  //Game over message
  useEffect(() => {
    if (gameover) {
      toast.error(`Game Over`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [gameover]);

  //Reset game handler
  const resetGame = useCallback(() => {
    resetInitialState(matrixLength);
  }, [matrixLength]);
  return (
    <>
      {console.log("Tiktak Main Page")}
      <div className="container">
        <h1 className="main-heading">TikTakToe</h1>
        <div className="text-center mt-5">
          <button
            onClick={() => {
              changeMatrixHandler(3);
            }}
            className="btn btn-warning mr-2 mb-2"
          >
            3*3 Game?
          </button>
          <button
            onClick={() => {
              changeMatrixHandler(4);
            }}
            className="btn btn-warning mr-2 mb-2"
          >
            4*4 Game?
          </button>
          <button
            onClick={() => {
              changeMatrixHandler(5);
            }}
            className="btn btn-warning mr-2 mb-2"
          >
            5*5 Game?
          </button>
          <button
            onClick={() => {
              changeMatrixHandler(6);
            }}
            className="btn btn-warning mr-2 mb-2"
          >
            6*6 Game?
          </button>
          {(winner || gameover) && <ResetGame resetGame={resetGame} />}
        </div>

        <div className="text-center mt-3 mb-3">
          {winner
            ? "We have a WINNER"
            : gameover
            ? "Game Over"
            : currentPlayer === "c"
            ? "Next Player : CROSS"
            : "Next Player : ROUND"}
        </div>
        <TiktakItems
          allItems={state}
          cellClick={cellClickHandler}
        ></TiktakItems>
      </div>
    </>
  );
};
export default Tiktak;
