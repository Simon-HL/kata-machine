export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpSize = Math.floor(Math.sqrt(breaks.length))

    let i = jumpSize
    for (i; i < breaks.length; i += jumpSize){
        if (breaks[i]) // find a height where it breaks
            break
    }

    i -= jumpSize // walk back the last jump before it broke

    for(let j = 0; j < jumpSize && i < breaks.length; ++j, ++i){
        if (breaks[i]){
            return i
        }
    }

    return -1
}


/*
Given two crystal balls that will break when falling from high enough. What is the most optimised way to find out the height in which they start breaking?
[f,f,f,f,f,f,f,t,t,t,t,t,t]

We have linear search and binary search at our disposal
If we used linear it would run O(N) and we would find the height by not wasting any balls.
Since you have 2 balls, you can afford to break 1. Can to the middle, if it breaks, linearly search from start to middle. But that's O(N) again. Don't count constants (1/2N)

Instead we need to jump with a different unit. Sqrt(N).
Make jumps of the size of Sqrt(N) until one ball breaks. Then linearly walk from the last point. Runtime will at most be Sqrt(N) then. 
Even if we make multiple jump O(Sqrt(N) + Sqrt(N) + ..) that would translate to O (X*Sqrt(N)). We drop constants, so we end up with O(Sqrt(N))
*/