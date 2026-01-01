'use client';

import { GameState } from '@/types/game';
import { Tile } from './Tile';

interface GameBoardProps {
  gameState: GameState;
}

export function GameBoard({ gameState }: GameBoardProps) {
  const { grid, playerPosition, boxes, targets } = gameState;

  const getTileType = (x: number, y: number) => {
    const isPlayer = playerPosition.x === x && playerPosition.y === y;
    const hasBox = boxes.some(box => box.x === x && box.y === y);
    const isTarget = targets.some(target => target.x === x && target.y === y);
    const baseType = grid[y][x];

    if (isPlayer && isTarget) return 'playerOnTarget';
    if (isPlayer) return 'player';
    if (hasBox && isTarget) return 'boxOnTarget';
    if (hasBox) return 'box';
    if (isTarget && baseType !== 'wall') return 'target';
    return baseType;
  };

  return (
    <div className="inline-block bg-slate-800 p-4 rounded-2xl shadow-2xl border-4 border-slate-700">
      <div className="flex flex-col gap-0.5">
        {grid.map((row, y) => (
          <div key={y} className="flex gap-0.5">
            {row.map((_, x) => (
              <Tile key={`${x}-${y}`} type={getTileType(x, y)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
