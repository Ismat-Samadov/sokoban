export type TileType = 'floor' | 'wall' | 'target' | 'box' | 'boxOnTarget' | 'player' | 'playerOnTarget';

export interface Position {
  x: number;
  y: number;
}

export interface Level {
  id: number;
  name: string;
  grid: TileType[][];
  playerStart: Position;
  boxesStart: Position[];
}

export interface GameState {
  currentLevel: number;
  playerPosition: Position;
  boxes: Position[];
  targets: Position[];
  grid: TileType[][];
  moves: number;
  isWon: boolean;
}

export type Direction = 'up' | 'down' | 'left' | 'right';
