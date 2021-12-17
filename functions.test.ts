const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('shuffleArray should', () => {
    it('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true);
    });

    it('an array of the same length as the argument sent in', () => {
        expect(shuffleArray(testArr).length).toBe(testArr.length);
    });

    it('have all the same items that were in the array', () => {
        let shuffle = shuffleArray(testArr);
        let sameItems = true;
        for (let i = 0; i < testArr.length; i++) {
            sameItems = shuffle.includes(testArr[i]);
            if (sameItems === false) {
                break;
            }
        }
        expect(sameItems).toBe(true);
    });

    it('shuffle the items', () => {
        let shuffled = false;
        let shuffle = shuffleArray(testArr);
        for (let i = 0; i < testArr.length; i++) {
            if (testArr[i] !== shuffle[i]) {
                shuffled = true;
            }
        }
        expect(shuffled).toBe(true);
    });
});