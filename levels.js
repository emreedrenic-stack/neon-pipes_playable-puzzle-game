export const LEVELS = [
    {
        id: 1,
        gridSize: 3,
        // 0: Empty, 1: Straight, 2: Elbow, 3: T-Shape, 4: Cross, 5: Source, 6: Sink
        // Rotation: 0, 1, 2, 3 (x 90deg)
        // Format: { type: number, rot: number, fixed: boolean }
        layout: [
            { type: 5, rot: 1, fixed: true }, { type: 1, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 6, rot: 3, fixed: true }
        ]
    },
    {
        id: 2,
        gridSize: 4,
        layout: [
            { type: 5, rot: 2, fixed: true }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
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
            { type: 5, rot: 1, fixed: true }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 0, rot: 0, fixed: true }, { type: 0, rot: 0, fixed: true },
            { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 3, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 3, rot: 2, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 0, rot: 0, fixed: true }, { type: 6, rot: 3, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }
        ]
    },
    {
        id: 4,
        gridSize: 5,
        // 5x5 Hard
        layout: [
            { type: 2, rot: 1, fixed: false }, { type: 5, rot: 2, fixed: true }, { type: 2, rot: 2, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 2, fixed: false }, { type: 3, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 3, rot: 3, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 3, rot: 1, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 3, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 2, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 6, rot: 0, fixed: true }, { type: 2, rot: 2, fixed: false }
        ]
    },
    {
        id: 5,
        gridSize: 6,
        // 6x6 Expert
        layout: [
            { type: 5, rot: 1, fixed: true }, { type: 1, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 0, rot: 0, fixed: true },
            { type: 2, rot: 0, fixed: false }, { type: 3, rot: 2, fixed: false }, { type: 2, rot: 3, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 3, fixed: false },
            { type: 3, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false }, { type: 1, rot: 0, fixed: false }, { type: 3, rot: 1, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 1, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 4, rot: 0, fixed: false }, { type: 3, rot: 3, fixed: false },
            { type: 4, rot: 0, fixed: false }, { type: 3, rot: 0, fixed: false }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 0, fixed: false }, { type: 1, rot: 0, fixed: false },
            { type: 0, rot: 0, fixed: true }, { type: 2, rot: 1, fixed: false }, { type: 1, rot: 1, fixed: false }, { type: 2, rot: 2, fixed: false }, { type: 6, rot: 3, fixed: true }, { type: 2, rot: 0, fixed: false }
        ]
    }
];

export const TILE_TYPES = {
    EMPTY: 0,
    STRAIGHT: 1,
    ELBOW: 2,
    TSHAPE: 3,
    CROSS: 4,
    SOURCE: 5, // Power source
    SINK: 6    // Endpoint
};

// Connections for each type at 0 rotation (Top, Right, Bottom, Left)
// 1 = connects, 0 = doesn't connect
/*
  Type 1 (Straight): Vertical | (Top, Bottom) -> [1, 0, 1, 0]
  Type 2 (Elbow): Top-Right -> [1, 1, 0, 0]
  Type 3 (T-Shape): Top-Right-Bottom -> [1, 1, 1, 0]
  Type 4 (Cross): All -> [1, 1, 1, 1]
  Type 5 (Source): Bottom (Standard outlet) -> [0, 0, 1, 0] (Depends on art, let's assume points DOWN by default)
  Type 6 (Sink): Top (Standard inlet) -> [1, 0, 0, 0]
*/
export const CONNECTIONS = {
    [TILE_TYPES.EMPTY]: [0, 0, 0, 0],
    [TILE_TYPES.STRAIGHT]: [1, 0, 1, 0],
    [TILE_TYPES.ELBOW]: [1, 1, 0, 0],
    [TILE_TYPES.TSHAPE]: [1, 1, 1, 0],
    [TILE_TYPES.CROSS]: [1, 1, 1, 1],
    [TILE_TYPES.SOURCE]: [0, 0, 1, 0], // Points Down
    [TILE_TYPES.SINK]: [1, 0, 0, 0]  // Points Up
};
