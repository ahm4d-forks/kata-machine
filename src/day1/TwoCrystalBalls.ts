export default function two_crystal_balls(breaks: boolean[]): number {

    // get the jump amount to avoid linear search
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    
    // start after one jump
    let i = jmpAmount;

    // increase i by jump amount until we find a spot where the ball breaks, we save that info
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // go back one square root chunk (because we are sure the ball breaks within this amount range)
    i -= jmpAmount;

    // traverse linearly until we find the exact spot the ball breaks at
    for (; i < breaks.length; ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}