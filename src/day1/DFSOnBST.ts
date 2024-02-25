function find(node: BinaryNode<number>, value: number): boolean {

    if (!node) return false;

    if (node.value === value) return true;

    if (node.left && value < node.value) {
        return find(node.left, value);
    }

    if (node.right && value > node.value) {
        return find(node.right, value);
    }

    return false;

}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return find(head, needle)
}
