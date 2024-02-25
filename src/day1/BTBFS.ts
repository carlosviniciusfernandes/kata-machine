export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head]; //pretend it is a queue

    while (q.length) {
        const curr = q.shift() as BinaryNode<number> //dequeue

        if (curr.value == needle) return true;

        if (curr?.left) q.push(curr.left) //enqueue
        if (curr?.right) q.push(curr.right) //enqueue
    }

    return false;
}
