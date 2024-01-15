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
                                // TLDR: this.tail.next is a reference to an object in memory that will be updated
                                // which is also reference by "tail-1", that's why is not lost when we update this.tail
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
