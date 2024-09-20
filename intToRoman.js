// Roman Numerals: [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'),
//     (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'),
//     (5, 'V'), (4, 'IV'), (1, 'I')]
var intToRoman = function (num) {
    var romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];
    var result = '';
    for (var i = 0; i < romanNumerals.length; i++) {
        var _a = romanNumerals[i], value = _a.value, symbol = _a.symbol;
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
};
console.log(intToRoman(3749));
