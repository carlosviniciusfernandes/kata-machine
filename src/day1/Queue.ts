type Node<T> = {
    value: T,
    next?: Node<T>
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>
        this.length ++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        };

        this.tail.next = node;  // "tail-1" is pointing to this guy, so when we update this.tail to a new node,
        this.tail = node;       // "tail-1" reference is not lot and "tail-1'.next points to the ne tail
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const currentHead = this.head;
        this.head = this.head.next;

        // garbage collector will eventually free the memory allocated by the currentHead
        currentHead.next = undefined; //* (Optional)
        if (this.length === 0) this.tail = undefined  //* (Optional)

        return currentHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
