export default function two_crystal_balls(breaks: boolean[]): number {
    /* TIP:
        Drop the first ball by incremental sqrt(N) until it breaks. O(sqrt(N))
        Drop the second ball linearly
    */

    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    let i = jumpAmount
    while (i < breaks.length) {
        if (breaks[i]) break
        i += jumpAmount
    }
    i -= jumpAmount

    for (let j = 0; j < jumpAmount; j++) {
        if (breaks[i+j]) return i+j
    }
    return -1
}
