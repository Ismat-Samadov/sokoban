import { Level } from '@/types/game';

// Classic Sokoban levels with increasing difficulty
export const levels: Level[] = [
  {
    id: 1,
    name: "Getting Started",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'player', 'floor', 'box', 'wall'],
      ['wall', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
  },
  {
    id: 2,
    name: "Two Boxes",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'player', 'floor', 'box', 'floor', 'wall'],
      ['wall', 'floor', 'box', 'floor', 'floor', 'wall'],
      ['wall', 'target', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
  },
  {
    id: 3,
    name: "Corner Trap",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'target', 'target', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'box', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'box', 'player', 'box', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 3, y: 3 },
  },
  {
    id: 4,
    name: "The Corridor",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'player', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'box', 'floor', 'box', 'floor', 'box', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'target', 'floor', 'target', 'floor', 'target', 'floor', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
  },
  {
    id: 5,
    name: "The Maze",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'player', 'floor', 'wall', 'floor', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'floor', 'box', 'floor', 'floor', 'wall', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'wall', 'floor', 'box', 'floor', 'target', 'wall'],
      ['wall', 'target', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'wall'],
      ['wall', 'floor', 'wall', 'floor', 'box', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'floor', 'box', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
  },
];
