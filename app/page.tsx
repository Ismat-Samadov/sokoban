'use client';

import { useGameState } from '@/hooks/useGameState';
import { GameBoard } from '@/components/GameBoard';
import { Controls } from '@/components/Controls';
import { levels } from '@/lib/levels';

export default function Home() {
  const {
    gameState,
    movePlayer,
    resetLevel,
    nextLevel,
    previousLevel,
    canGoNext,
    canGoPrevious,
    totalLevels,
  } = useGameState();

  const currentLevelData = levels[gameState.currentLevel];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
          Sokoban
        </h1>
        <p className="text-slate-400 text-lg">Push the boxes onto the targets!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <GameBoard gameState={gameState} />

        <Controls
          onMove={movePlayer}
          onReset={resetLevel}
          onNext={nextLevel}
          onPrevious={previousLevel}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
          moves={gameState.moves}
          levelName={currentLevelData.name}
          currentLevel={gameState.currentLevel}
          totalLevels={totalLevels}
          isWon={gameState.isWon}
        />
      </div>

      <footer className="mt-12 text-slate-500 text-sm text-center">
        <p>Made with Next.js & TypeScript</p>
      </footer>
    </main>
  );
}
