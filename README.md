# Sokoban Game

A beautiful, modern implementation of the classic Sokoban puzzle game built with Next.js 15 and TypeScript.

## Features

- **5 Progressive Levels**: Start easy and work your way up to challenging puzzles
- **Smooth Animations**: Beautiful transitions and visual feedback
- **Keyboard Controls**: Full keyboard support with arrow keys and WASD
- **Level Progression**: Navigate between completed levels
- **Move Counter**: Track your efficiency
- **Win Detection**: Automatic level completion detection
- **Responsive Design**: Beautiful dark theme with Tailwind CSS
- **Fast Performance**: Built with Next.js 15 and Turbopack

## How to Play

1. Push all boxes (📦) onto the target positions (⭕)
2. Use arrow keys or WASD to move your character (🤖)
3. You can only push boxes, not pull them
4. You cannot push two boxes at once
5. Press 'R' to reset the current level
6. Navigate between levels using the Previous/Next buttons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play the game.

### Build

```bash
npm run build
npm start
```

## Game Controls

- **Arrow Keys** or **WASD**: Move player
- **R**: Reset current level
- **Previous/Next Buttons**: Navigate between levels
- **On-screen Controls**: Click the directional buttons

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack
- **State Management**: React Hooks

## Project Structure

```
sokoban/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main game page
│   └── globals.css      # Global styles and animations
├── components/
│   ├── GameBoard.tsx    # Game board renderer
│   ├── Tile.tsx         # Individual tile component
│   └── Controls.tsx     # Game controls UI
├── hooks/
│   └── useGameState.ts  # Game state management hook
├── lib/
│   └── levels.ts        # Level definitions
└── types/
    └── game.ts          # TypeScript type definitions
```

## Game Logic

The game implements classic Sokoban rules:
- Player can move in 4 directions
- Player can push one box at a time
- Boxes cannot be pushed into walls or other boxes
- Level is complete when all boxes are on targets
- Boxes on targets are highlighted in green

## License

MIT

---

Made with Next.js & TypeScript
