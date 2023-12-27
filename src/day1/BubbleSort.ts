export default function bubble_sort(arr: number[]): void {
    /* Each iteration reduces the number of items we need to look by one  => O((N+1)N/2) => O(N²)
       TIP: Remember, N + (N-1) + (N-2) ... + (N-N+1) = (N+1) * N/2  => Gauss Sum
    */
    for(let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr.length -1 -i; ++j) { // arr.length -1 -i => subtracting 'i' as each iteration, the last item become sorted
            if (arr[j] > arr[j+1]) {
                const aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
}
