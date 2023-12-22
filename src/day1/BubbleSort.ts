export default function bubble_sort(arr: number[]): void {
    /* Each iteration reduces the number of items we need to look by one => O((N+1)N/2) => O(N²) */
    for(let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr.length -1 -i; ++j) {
            if (arr[j] > arr[j+1]) {
                const aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
}
