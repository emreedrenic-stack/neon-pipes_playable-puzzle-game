// --- LEVELS & CONSTANTS ---

const LEVELS = [
    {
        id: 1,
        gridSize: 3,
        // 0: Empty, 1: Straight, 2: Elbow, 3: T-Shape, 4: Cross, 5: Source, 6: Sink
        // Rotation: 0, 1, 2, 3 (x 90deg)
        // Format: { type: number, rot: number, fixed: boolean }
        layout: [
            { type: 5, rot: 3, fixed: true }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 6, rot: 0, fixed: true }
        ]
    },
    {
        id: 2,
        gridSize: 4,
        layout: [
            { type: 5, rot: 0, fixed: true }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 3, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 2, rot: 0, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 6, rot: 0, fixed: true }
        ]
    },
    {
        id: 3,
        gridSize: 5,
        // 5x5 Medium
        layout: [
            { type: 5, rot: 3, fixed: true }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 0, rot: 0, fixed: true }, { type: 0, rot: 0, fixed: true },
            { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 3, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 3, rot: 2, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 0, rot: 0, fixed: true }, { type: 6, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }
        ]
    },
    {
        id: 4,
        gridSize: 5,
        // 5x5 Hard
        layout: [
            { type: 2, rot: 0, fixed: false }, { type: 5, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 3, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 3, rot: 2, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 3, rot: 2, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 3, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 2, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 6, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }
        ]
    },
    {
        id: 5,
        gridSize: 6,
        // 6x6 Expert
        layout: [
            { type: 5, rot: 3, fixed: true }, { type: 1, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 0, rot: 0, fixed: true },
            { type: 2, rot: 0, fixed: false }, { type: 3, rot: 2, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 3, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 3, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false },
            { type: 4, rot: 0, fixed: false }, { type: 3, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 6, rot: 3, fixed: true }, { type: 2, rot: 0, fixed: false }
        ]
    },
    {
        id: 6,
        gridSize: 6,
        // 6x6 Advanced
        layout: [
            { type: 5, rot: 3, fixed: true }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 2, fixed: false },
            { type: 3, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 0, rot: 0, fixed: true }, { type: 1, rot: 1, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 3, rot: 2, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 6, rot: 3, fixed: true }
        ]
    },
    {
        id: 7,
        gridSize: 7,
        // 7x7 The Snake (Zig-Zag)
        // Guaranteed path: Row 0(L->R) -> Col 6 down -> Row 1(R->L) -> Col 0 down...
        // Fixed Source at (0,0) pointing Right (1)
        layout: [
            { type: 5, rot: 1, fixed: true }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 6, rot: 0, fixed: true }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 0, fixed: false }
        ]
    },
    {
        id: 8,
        gridSize: 7,
        // 7x7 The Spiral
        // Inward spiral to center, then out? No, just Start(0,0) -> spiral in -> center -> spiral out -> End(6,6) is too hard to fit.
        // Let's do simple Spiral In. Source (0,0). Sink (3,3) (Center).
        // Path: Right edge -> Bottom edge -> Left edge -> Top edge -> Inner...
        layout: [
            { type: 5, rot: 1, fixed: true }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 6, rot: 0, fixed: true }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }
        ]
    },
    {
        id: 9,
        gridSize: 7,
        // 7x7 The Lattice (Crosses require 4 inputs usually, or at least pass-through. 
        // We'll use crosses as straight pass-throughs to confuse player, or actual 4-way hubs.
        // Let's build a path that splits and rejoins using Crosses.
        // Actually our logic (BFS) supports multiple active paths! If we activate neighbors, flow spreads.
        // So we CAN have splits.
        // Source(0,3) -> Split Up/Down -> Rejoin at (6,3) Sink.
        layout: [
            { type: 2, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 5, rot: 1, fixed: true }, { type: 4, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 6, rot: 3, fixed: true },
            { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }
        ]
    },
    {
        id: 10,
        gridSize: 7,
        // 7x7 Grandmaster: The Long Road
        // Source Top-Left, Sink Bottom-Right.
        // A path that visits almost every tile.
        layout: [
            { type: 5, rot: 1, fixed: true }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 1, rot: 1, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 2, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 6, rot: 3, fixed: true }
        ]
    }
];

const TILE_TYPES = {
    EMPTY: 0,
    STRAIGHT: 1,
    ELBOW: 2,
    TSHAPE: 3,
    CROSS: 4,
    SOURCE: 5, // Power source
    SINK: 6    // Endpoint
};

const CONNECTIONS = {
    [TILE_TYPES.EMPTY]: [0, 0, 0, 0],
    [TILE_TYPES.STRAIGHT]: [1, 0, 1, 0],
    [TILE_TYPES.ELBOW]: [1, 1, 0, 0],
    [TILE_TYPES.TSHAPE]: [1, 1, 1, 0],
    [TILE_TYPES.CROSS]: [1, 1, 1, 1],
    [TILE_TYPES.SOURCE]: [0, 0, 1, 0], // Points Down
    [TILE_TYPES.SINK]: [1, 0, 0, 0]  // Points Up
};

// --- GAME LOGIC ---

class Game {
    constructor() {
        this.currentLevelIndex = 0;
        this.gameState = 'START'; // START, PLAYING, WON, END
        this.grid = [];
        this.gridSize = 0;

        // DOM Elements
        this.gridEl = document.getElementById('grid');
        this.levelDisplay = document.getElementById('level-display');
        this.startScreen = document.getElementById('start-screen');
        this.victoryScreen = document.getElementById('victory-screen');
        this.endScreen = document.getElementById('end-screen');

        // Buttons
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextLevel());
        document.getElementById('restart-game-btn').addEventListener('click', () => this.resetGame());
    }

    resetGame() {
        this.currentLevelIndex = 0;
        this.endScreen.classList.remove('visible');
        this.startGame();
    }

    startGame() {
        this.startScreen.classList.remove('visible');
        this.loadLevel(this.currentLevelIndex);
    }

    loadLevel(index) {
        if (index >= LEVELS.length) {
            this.showEndScreen();
            return;
        }

        this.gameState = 'PLAYING';
        this.victoryScreen.classList.remove('visible');

        const levelData = LEVELS[index];
        this.gridSize = levelData.gridSize;
        this.levelDisplay.textContent = `Level ${levelData.id}`;

        // Update Grid CSS
        this.gridEl.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
        this.gridEl.style.gridTemplateRows = `repeat(${this.gridSize}, 1fr)`;
        this.gridEl.innerHTML = '';

        // Clone layout
        this.grid = levelData.layout.map(tile => ({ ...tile, active: false }));

        this.renderGrid();
        this.propagateFlow(); // Check initial state
    }

    renderGrid() {
        this.gridEl.innerHTML = '';
        this.grid.forEach((tile, index) => {
            const tileEl = document.createElement('div');
            tileEl.classList.add('tile');
            tileEl.dataset.index = index;

            // Rotation
            tileEl.style.transform = `rotate(${tile.rot * 90}deg)`;

            // Visual type classes
            if (tile.type === TILE_TYPES.SOURCE) tileEl.classList.add('source');
            if (tile.type === TILE_TYPES.SINK) tileEl.classList.add('sink');
            if (tile.fixed) tileEl.classList.add('fixed');
            if (tile.active) tileEl.classList.add('active');

            // Construct pipe visuals inner HTML
            this.createPipeVisuals(tileEl, tile.type);

            // Interaction
            if (!tile.fixed && tile.type !== TILE_TYPES.EMPTY) {
                tileEl.addEventListener('click', () => this.rotateTile(index));
            }

            this.gridEl.appendChild(tileEl);
        });
    }

    createPipeVisuals(element, type) {
        const conns = CONNECTIONS[type];
        if (!conns) return;

        const [top, right, bottom, left] = conns;

        // Center hub
        if (type !== TILE_TYPES.EMPTY) {
            const center = document.createElement('div');
            center.className = 'pipe-part pipe-center';
            element.appendChild(center);
        }

        if (top) this.addArm(element, 'arm-top');
        if (right) this.addArm(element, 'arm-right');
        if (bottom) this.addArm(element, 'arm-bottom');
        if (left) this.addArm(element, 'arm-left');
    }

    addArm(parent, className) {
        const arm = document.createElement('div');
        arm.className = `pipe-part ${className}`;
        parent.appendChild(arm);
    }

    rotateTile(index) {
        if (this.gameState !== 'PLAYING') return;

        const tile = this.grid[index];
        tile.rot = (tile.rot + 1) % 4;

        // Update DOM transform immediately for performance
        const tileEl = this.gridEl.children[index];
        tileEl.style.transform = `rotate(${tile.rot * 90}deg)`;

        // Recalculate flow
        this.propagateFlow();
    }

    propagateFlow() {
        // Reset active state
        this.grid.forEach(t => t.active = false);

        // Find Source
        let sourceIndex = this.grid.findIndex(t => t.type === TILE_TYPES.SOURCE);
        if (sourceIndex === -1) return;

        // BFS to find all connected pipes
        let queue = [sourceIndex];
        let visited = new Set();
        this.grid[sourceIndex].active = true;
        visited.add(sourceIndex);

        let win = false;

        while (queue.length > 0) {
            let currIdx = queue.shift();
            let currTile = this.grid[currIdx];

            if (currTile.type === TILE_TYPES.SINK) {
                win = true;
            }

            const neighbors = this.getNeighbors(currIdx);

            neighbors.forEach(n => {
                if (!visited.has(n.index)) {
                    if (this.canConnect(currIdx, n.index, n.direction)) {
                        this.grid[n.index].active = true;
                        visited.add(n.index);
                        queue.push(n.index);
                    }
                }
            });
        }

        this.updateVisuals();

        if (win) {
            setTimeout(() => this.handleWin(), 300);
        }
    }

    getNeighbors(index) {
        let x = index % this.gridSize;
        let y = Math.floor(index / this.gridSize);
        let neighbors = [];

        // Top
        if (y > 0) neighbors.push({ index: index - this.gridSize, direction: 0 });
        // Right
        if (x < this.gridSize - 1) neighbors.push({ index: index + 1, direction: 1 });
        // Bottom
        if (y < this.gridSize - 1) neighbors.push({ index: index + this.gridSize, direction: 2 });
        // Left
        if (x > 0) neighbors.push({ index: index - 1, direction: 3 });

        return neighbors;
    }

    canConnect(fromIdx, toIdx, direction) {
        const fromTile = this.grid[fromIdx];
        const toTile = this.grid[toIdx];

        const fromConns = this.getRotatedConnections(fromTile.type, fromTile.rot);
        const toConns = this.getRotatedConnections(toTile.type, toTile.rot);

        const oppositeDir = (direction + 2) % 4;

        return fromConns[direction] === 1 && toConns[oppositeDir] === 1;
    }

    getRotatedConnections(type, rot) {
        const original = CONNECTIONS[type];
        const newConns = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            newConns[(i + rot) % 4] = original[i];
        }
        return newConns;
    }

    updateVisuals() {
        this.grid.forEach((tile, ctx) => {
            const el = this.gridEl.children[ctx];
            if (tile.active) el.classList.add('active');
            else el.classList.remove('active');
        });
    }

    handleWin() {
        if (this.gameState === 'WON') return;
        this.gameState = 'WON';
        this.victoryScreen.classList.add('visible');
    }

    nextLevel() {
        this.currentLevelIndex++;
        this.loadLevel(this.currentLevelIndex);
    }

    showEndScreen() {
        this.endScreen.classList.add('visible');
    }
}

new Game();
