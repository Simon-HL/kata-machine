export default function bubble_sort(arr: number[]): void {

    // want to compare i to i+1, so we go from 0 and up to but not including N-1
    for (let i = 0; i < arr.length; ++i){
        for(let j = 0; j < arr.length-1-i; ++j){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
}
function swap(arr: number[], index: number, nextIndex: number): void {
    const tmp = arr[index]
    arr[index] = arr[nextIndex]
    arr[nextIndex] = tmp
}


/*
A sorted array means that Xi<=Xi+1 for all elements. Any element at i if less or equal to the next element

Given the unsorted array [1,3,7,4,2]
Bubble sort will start at index 0 and go to the end of the array
Underway it will check if the element next to it (i+1) is smaller than the current element. Am I larger than you?
If so, they swap places.

After one iteration over the array, the largest item will be at the end. [1,3,7,4,2] -> [1,3,4,2,7] N
The next iretation we only have to go up to the last position (n-1). [1,3,4,2] -> [1,3,2,4] N-1
Same thing. Largest item in the back, drop that index. [1,3,2] -> [1,2,3] N-2
We keep going even though our array is accidentally sorted now [1,2] -> [1,2] N-3
When you have one position left you have a sorted array [1] N-4

Runtime for the iterations will be N, N-1, N-2, ... , N-N+1 
That is a "famous pattern(?)", ref. example of asshole kid in class? Ends up with writing every number from 1 to 100 to be. 101*50 => (N+1)*(N/2)

Our iterations are oposite of that, going from 1 at the bottom up to N.
If we SUM up these values we get N(N+1)/2. That is how many literal steps we have to take. We drop constants, N(N+1), solve paranthesis, N^2+N => O(N^2+N), but in big o notation we drop insignificant values
End up with O(N^2)
*/