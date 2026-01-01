import { Level } from '@/types/game';

// Classic Sokoban levels with increasing difficulty
export const levels: Level[] = [
  {
    id: 1,
    name: "Getting Started",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
    boxesStart: [{ x: 3, y: 1 }],
  },
  {
    id: 2,
    name: "Two Boxes",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'target', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
    boxesStart: [{ x: 3, y: 1 }, { x: 2, y: 2 }],
  },
  {
    id: 3,
    name: "Corner Trap",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'target', 'target', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 3, y: 3 },
    boxesStart: [{ x: 3, y: 2 }, { x: 2, y: 3 }, { x: 4, y: 3 }],
  },
  {
    id: 4,
    name: "The Corridor",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'target', 'floor', 'target', 'floor', 'target', 'floor', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
    boxesStart: [{ x: 1, y: 2 }, { x: 3, y: 2 }, { x: 5, y: 2 }],
  },
  {
    id: 5,
    name: "The Maze",
    grid: [
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'wall', 'floor', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'target', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'wall'],
      ['wall', 'floor', 'wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'wall', 'floor', 'floor', 'target', 'wall'],
      ['wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ],
    playerStart: { x: 1, y: 1 },
    boxesStart: [{ x: 2, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 5 }, { x: 2, y: 7 }],
  },
];
