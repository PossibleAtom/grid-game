import React from "react";
import styles from './placableMenu.module.css';
import { Placeable } from "../../page/GameBoard/gameBoard";

interface PlacableMenuProps {
  selectedPlaceable: Placeable | undefined;
  setSelectedPlaceable: React.Dispatch<React.SetStateAction<Placeable | undefined>>;
}

export const PlaceableMenu = ({selectedPlaceable, setSelectedPlaceable}: PlacableMenuProps) => {
  const placables: Placeable[] = [
    {
      name: 'example 1',
      color: 'red',
    },
    {
      name: 'example 2',
      color: 'blue',
    }
  ]

  const selectPlaceable = (placeable: Placeable | undefined) => {
    setSelectedPlaceable(placeable);
  }

  const generatePlaceables = () => {
    return placables.map((placeable) => {
      return (<button onClick={() => selectPlaceable(placeable)}>{placeable.name}</button>)
    })
  }

  return (
  <div className={styles.PlacableMenu}>
    <h1>Placeables</h1>
    <p>Selected: {selectedPlaceable?.name || 'none'}</p>
    <div className={styles.SelectionMenu}>
      <button onClick={() => selectPlaceable(undefined)}>clear</button>
      {generatePlaceables()}
    </div>
  </div>
);
}