export default function bs_list(haystack: number[], needle: number): boolean {
    // [lo,hi)
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let m = Math.floor(lo + (hi - lo) / 2);
        let v = haystack[m];
        
        if (needle === v) {
            return true;
        } else if (needle < v) {
            hi = m;
        } else if (needle > v) {
            lo = m + 1;
        }
    }

    return false;
}