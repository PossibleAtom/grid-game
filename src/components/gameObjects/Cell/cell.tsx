import React from 'react'
import styles from './cell.module.css'
import { Placeable } from '../../page/GameBoard/gameBoard';

interface CellProps {
  selectedPlaceable: Placeable | undefined;
}

export const Cell = ({selectedPlaceable}: CellProps) => {
  const [content, setContent] = React.useState(undefined as  Placeable | undefined);
  return <div onClick={() => setContent(selectedPlaceable)} className={styles.Cell}>{content?.color || ''}</div>
}