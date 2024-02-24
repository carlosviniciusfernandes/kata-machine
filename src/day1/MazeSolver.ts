const dir = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // down
    [0, 1], // up
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    //Base case

    //1. Are we off the map?
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze[0].length) {
        return false;
    }

    //2. Do we hit a wall?
    if (maze[curr.y][curr.x] === wall){
        return false;
    }

    //3. Is this the exit?
    if (curr.x === end.x && curr.y === end.y){
        path.push(end);
        return true;
    }

    //4. Have we seen this tile before?
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Recurse pre
    seen[curr.y][curr.x] = true
    path.push(curr);

    // Recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        const next = {
            x: curr.x + x,
            y: curr.y + y,
        }
        if(walk(
            maze,
            wall,
            next,
            end,
            seen,
            path
        )) {
            return true; // stop recursion
        }
    }

    // Recurse post
    path.pop(); //undo

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    // function must return a list of point from the start to the end, the path!
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i=0; i < maze.length; ++i){
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
