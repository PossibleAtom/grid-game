import React from "react";
import BoardGrid from "../../gameObjects/boardGrid/boardGrid";
import styles from './gameBoard.module.css'
import { PlaceableMenu } from "../../gameObjects/placableSelector/placeableMenu";


export interface Placeable {
  name: string;
  color: string;
  fileName: string;
}

export const GameBoard = () => {
  const [selectedPlaceable, setSelectedPlaceable] = React.useState(undefined as Placeable | undefined);
  return (
    <div className={styles.BoardContainer}>
      <PlaceableMenu
        selectedPlaceable={selectedPlaceable}
        setSelectedPlaceable={setSelectedPlaceable}
      />
      <BoardGrid
        selectedPlaceable={selectedPlaceable}
      />
    </div>
  );
}

export default GameBoard;