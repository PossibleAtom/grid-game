import React from "react";
import styles from './boardGrid.module.css'
import { Cell } from "../Cell/cell";
import { Placeable } from "../../page/GameBoard/gameBoard";

const BOARD_HEIGHT = 25;
const BOARD_WIDTH = 25;

interface BoardGridProps {
  selectedPlaceable: Placeable | undefined;
}

export const BoardGrid = ({selectedPlaceable}: BoardGridProps) => {

  const generateGrid = () => {
    const gridRows = Array(BOARD_WIDTH).fill(<div><Cell selectedPlaceable={selectedPlaceable}/></div>);
    return Array(BOARD_HEIGHT).fill(
      <div className={styles.GridRow}>
        {gridRows}
      </div>
    );
  }

  return (
  <div className={styles.Grid}>{generateGrid()}</div>
)
}

export default BoardGrid;