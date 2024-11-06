import React from 'react'
import styles from './cell.module.css'
import { Placeable } from '../../page/GameBoard/gameBoard';
import styled from 'styled-components';

interface CellProps {
  selectedPlaceable: Placeable | undefined;
}

const CellContainer = styled.div<{$contentColor?: string; }>`
  background-color: ${props => props.$contentColor || '#E9E9E9'}
`

export const Cell = ({selectedPlaceable}: CellProps) => {
  const [content, setContent] = React.useState(undefined as  Placeable | undefined);
  return <CellContainer $contentColor={content?.color} onClick={() => setContent(selectedPlaceable)} className={styles.Cell}/>
}