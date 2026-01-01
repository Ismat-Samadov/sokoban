'use client';

import { TileType } from '@/types/game';

interface TileProps {
  type: TileType;
}

export function Tile({ type }: TileProps) {
  const baseClasses = 'w-12 h-12 flex items-center justify-center text-2xl transition-all duration-200';

  const tileStyles = {
    wall: 'bg-slate-600 shadow-inner',
    floor: 'bg-slate-700',
    target: 'bg-slate-700 relative',
    box: 'bg-amber-600 shadow-lg rounded-lg transform hover:scale-105',
    boxOnTarget: 'bg-emerald-500 shadow-lg rounded-lg animate-pulse',
    player: 'bg-blue-500 shadow-lg rounded-full transform hover:scale-110',
    playerOnTarget: 'bg-blue-500 shadow-lg rounded-full relative',
  };

  const getContent = () => {
    switch (type) {
      case 'wall':
        return '🧱';
      case 'box':
        return '📦';
      case 'boxOnTarget':
        return '✅';
      case 'player':
        return '🤖';
      case 'playerOnTarget':
        return (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-30"></div>
            </div>
            <span className="relative z-10">🤖</span>
          </>
        );
      case 'target':
        return (
          <div className="w-8 h-8 border-4 border-dashed border-yellow-400 rounded-full opacity-50"></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${baseClasses} ${tileStyles[type]}`}>
      {getContent()}
    </div>
  );
}
