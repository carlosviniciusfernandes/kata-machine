
type node<T> = {
    value: T | undefined
    next: node<T> | undefined
};

export default class SinglyLinkedList<T> {
    public length: number;

    private head: node<T>;

    constructor() {
        this.head = { value: undefined, next: undefined}
        this.length = 0
    }

    prepend(item: T): void {
        const exitingFirstItem = this.head.next
        if (!exitingFirstItem) {
            this.head.next = { value: item, next: undefined}
            this.length = 1
        } else {
            const newFirstItem = { value: item, next: exitingFirstItem}
            this.head.next = newFirstItem
            this.length += 1
        }
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length - 1) throw Error('Out of bounds')

        const existingNode = this.getNodeAt(idx)
        const existingNextNode = existingNode!.next

        const newNode = { value: item, next: existingNextNode}
        existingNode!.next = newNode
        this.length += 1

    }

    append(item: T): void {
        const newItem = { value: item, next: undefined}

        let node = this.head.next
        if (!node) {
            this.head.next = newItem
            this.length = 1
            return
        }

        for(let i=0; i<this.length; i++){
            if (node.next) node = node.next
        }
        node.next = newItem
        this.length += 1
    }

    remove(item: T): T | undefined {
        let prev = this.head
        let node = prev.next
        if (!node) return undefined

        for(let i=0; i<this.length; i++){
            if (node.value == item) {
                prev.next = node.next
                this.length -= 1
                return node.value
            }
            if (node.next) {
                prev = node
                node = node.next
            }
        }
        return undefined
    }


    private getNodeAt(idx: number): node<T> | undefined{
        if (idx == -1) return this.head

        let node = this.head.next
        if (!node) return undefined

        for(let i=0; i<idx; i++){
            if (node.next) {
                node = node.next
            } else {
                return undefined
            }
        }
        return node
    }

    get(idx: number): T | undefined {
        const node = this.getNodeAt(idx)
        return node ? node.value : undefined
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length - 1) throw Error('Out of bounds')

        const prevNode = this.getNodeAt(idx-1)
        const currentNode = prevNode!.next
        const nextNode = currentNode!.next ?? undefined

        prevNode!.next = nextNode
        this.length -= 1

        return currentNode!.value
    }
}
