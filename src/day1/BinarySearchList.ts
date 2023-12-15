export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length


    do {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[m]

        if (v===needle)
            return true
        else if(v > needle){
            hi = m
        }
        else {
            lo = m + 1 // ikke nødvendig å se på midpoint igjen. Har jo sjekka den i denne iterasjonen
        }
        
    }while(lo < hi)

    return false
}