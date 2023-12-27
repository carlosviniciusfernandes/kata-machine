export default function bs_list(haystack: number[], needle: number): boolean {
    /* search(arr, low, high) -> iterate until lo and hi converge */
    /* requires haystack to be sorted */

    let low = 0
    let high = haystack.length

    while (low < high) {
        const i = Math.floor(low +  (high - low)/2)
        // NOTE: by halving it by 2 a number of N times, this produces O(logN) -> log is in base 2
        const value = haystack[i]
        if (value === needle) {
            return true
        } else if (value > needle) {
            high = i
        } else {
            low = i + 1
        }
    }

    return false
}
