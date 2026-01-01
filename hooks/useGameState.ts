'use client';

import { useState, useEffect, useCallback } from 'react';
import { GameState, Position, Direction } from '@/types/game';
import { levels } from '@/lib/levels';

// Helper function to initialize level (defined outside to avoid closure issues)
function initializeLevel(levelIndex: number): GameState {
  const level = levels[levelIndex];
  const targets: Position[] = [];

  // Extract targets from the grid
  level.grid.forEach((row, y) => {
    row.forEach((tile, x) => {
      if (tile === 'target') {
        targets.push({ x, y });
      }
    });
  });

  return {
    currentLevel: levelIndex,
    playerPosition: { ...level.playerStart },
    boxes: level.boxesStart.map(box => ({ ...box })),
    targets,
    grid: level.grid.map(row => [...row]),
    moves: 0,
    isWon: false,
  };
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => initializeLevel(0));

  const resetLevel = useCallback(() => {
    setGameState(initializeLevel(gameState.currentLevel));
  }, [gameState.currentLevel]);

  const nextLevel = useCallback(() => {
    const nextLevelIndex = gameState.currentLevel + 1;
    if (nextLevelIndex < levels.length) {
      setGameState(initializeLevel(nextLevelIndex));
    }
  }, [gameState.currentLevel]);

  const previousLevel = useCallback(() => {
    const prevLevelIndex = gameState.currentLevel - 1;
    if (prevLevelIndex >= 0) {
      setGameState(initializeLevel(prevLevelIndex));
    }
  }, [gameState.currentLevel]);

  const movePlayer = useCallback((direction: Direction) => {
    setGameState((prevState) => {
      if (prevState.isWon) return prevState;

      const { playerPosition, boxes, grid, moves, targets } = prevState;
      const delta = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      }[direction];

      const newPlayerPos: Position = {
        x: playerPosition.x + delta.x,
        y: playerPosition.y + delta.y,
      };

      // Check if new position is a wall
      if (grid[newPlayerPos.y]?.[newPlayerPos.x] === 'wall') {
        return prevState;
      }

      // Check if there's a box at the new position
      const boxIndex = boxes.findIndex(
        box => box.x === newPlayerPos.x && box.y === newPlayerPos.y
      );

      if (boxIndex !== -1) {
        // There's a box, check if we can push it
        const newBoxPos: Position = {
          x: newPlayerPos.x + delta.x,
          y: newPlayerPos.y + delta.y,
        };

        // Check if the box's new position is valid
        if (grid[newBoxPos.y]?.[newBoxPos.x] === 'wall') {
          return prevState; // Can't push box into wall
        }

        // Check if there's another box at the new box position
        const hasAnotherBox = boxes.some(
          box => box.x === newBoxPos.x && box.y === newBoxPos.y
        );

        if (hasAnotherBox) {
          return prevState; // Can't push box into another box
        }

        // Move the box
        const newBoxes = [...boxes];
        newBoxes[boxIndex] = newBoxPos;

        // Check win condition
        const isWon = targets.every(target =>
          newBoxes.some(box => box.x === target.x && box.y === target.y)
        );

        return {
          ...prevState,
          playerPosition: newPlayerPos,
          boxes: newBoxes,
          moves: moves + 1,
          isWon,
        };
      } else {
        // No box, just move the player
        return {
          ...prevState,
          playerPosition: newPlayerPos,
          moves: moves + 1,
        };
      }
    });
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyMap: Record<string, Direction> = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
        w: 'up',
        s: 'down',
        a: 'left',
        d: 'right',
      };

      const direction = keyMap[e.key];
      if (direction) {
        e.preventDefault();
        movePlayer(direction);
      }

      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        resetLevel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer, resetLevel]);

  return {
    gameState,
    movePlayer,
    resetLevel,
    nextLevel,
    previousLevel,
    canGoNext: gameState.currentLevel < levels.length - 1,
    canGoPrevious: gameState.currentLevel > 0,
    totalLevels: levels.length,
  };
}
