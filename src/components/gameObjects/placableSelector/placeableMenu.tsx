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
      name: 'Fire Tile',
      color: 'red',
      fileName: 'Fire',
    },
    {
      name: 'Water Tile',
      color: 'blue',
      fileName: 'Water'
    }
  ]

  const selectPlaceable = (placeable: Placeable | undefined) => {
    setSelectedPlaceable(placeable);
  }

  const generatePlaceables = () => {
    return placables.map((placeable) => {
      return (<button onClick={() => selectPlaceable(placeable)}>
        {placeable.name}
        <img src={`${process.env.PUBLIC_URL}/images/${placeable.fileName}.png`} alt={placeable.fileName}/>
        </button>)
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