function romanToInt(s) {
    const romanValues = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentSymbol = s[i];
        const currentValue = romanValues.get(currentSymbol);

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}


const s1 = "III";
console.log(romanToInt(s1)); 

const s2 = "LVIII";
console.log(romanToInt(s2)); 

const s3 = "MCMXCIV";
console.log(romanToInt(s3));
