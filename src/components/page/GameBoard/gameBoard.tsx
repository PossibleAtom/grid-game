import React from "react";
import BoardGrid from "../../gameObjects/boardGrid/boardGrid";
import styles from './gameBoard.module.css'

export const GameBoard = () => {
  return (
    <div className={styles.BoardContainer}>
      <BoardGrid />
    </div>
  );
}

export default GameBoard;