'use client';

import { Direction } from '@/types/game';

interface ControlsProps {
  onMove: (direction: Direction) => void;
  onReset: () => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  moves: number;
  levelName: string;
  currentLevel: number;
  totalLevels: number;
  isWon: boolean;
}

export function Controls({
  onMove,
  onReset,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  moves,
  levelName,
  currentLevel,
  totalLevels,
  isWon,
}: ControlsProps) {
  const buttonClass = 'px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  const arrowButtonClass = 'w-14 h-14 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold text-xl transition-all transform hover:scale-105 active:scale-95';

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      {/* Level Info */}
      <div className="bg-slate-800 p-6 rounded-xl border-2 border-slate-700">
        <h2 className="text-2xl font-bold text-center mb-2 text-blue-400">
          Level {currentLevel + 1} of {totalLevels}
        </h2>
        <p className="text-center text-slate-300 mb-3">{levelName}</p>
        <div className="flex justify-center items-center gap-4">
          <div className="text-center">
            <p className="text-sm text-slate-400">Moves</p>
            <p className="text-3xl font-bold text-white">{moves}</p>
          </div>
        </div>
        {isWon && (
          <div className="mt-4 p-4 bg-emerald-600 rounded-lg text-center animate-bounce">
            <p className="text-xl font-bold text-white">🎉 Level Complete! 🎉</p>
          </div>
        )}
      </div>

      {/* Direction Controls */}
      <div className="bg-slate-800 p-6 rounded-xl border-2 border-slate-700">
        <p className="text-center text-slate-300 mb-4 text-sm">Use Arrow Keys or WASD</p>
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
          <div></div>
          <button
            onClick={() => onMove('up')}
            className={arrowButtonClass}
            aria-label="Move up"
          >
            ↑
          </button>
          <div></div>
          <button
            onClick={() => onMove('left')}
            className={arrowButtonClass}
            aria-label="Move left"
          >
            ←
          </button>
          <button
            onClick={() => onMove('down')}
            className={arrowButtonClass}
            aria-label="Move down"
          >
            ↓
          </button>
          <button
            onClick={() => onMove('right')}
            className={arrowButtonClass}
            aria-label="Move right"
          >
            →
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button onClick={onReset} className={buttonClass}>
          🔄 Reset Level (R)
        </button>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className={buttonClass}
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className={buttonClass}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-slate-800 p-4 rounded-xl border-2 border-slate-700 text-sm text-slate-300">
        <p className="font-semibold text-white mb-2">How to Play:</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Push all boxes (📦) onto targets (⭕)</li>
          <li>You cannot pull boxes, only push</li>
          <li>You cannot push two boxes at once</li>
          <li>Complete all levels to win!</li>
        </ul>
      </div>
    </div>
  );
}
