export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr]
        for (let i = 0; i < graph.length; ++i) {
            if (adjs[i] === 0 || seen[i]) continue;

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }

    } while (q.length);

    if (prev[needle] === -1){
        return null;
    }

    // build it backwards

    let curr = needle;
    const output: number[] = [];
    while (prev[curr] !== -1) {
        output.push(curr);
        curr = prev[curr];
    }

    if (output.length){
        output.reverse();
        output.unshift(source);
        return output;
    }

    return null;
}
