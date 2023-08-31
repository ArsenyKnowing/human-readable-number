module.exports = function toReadable(number) {
    let zeroToNineteenArr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let tenToNinety = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let arrNum = Array.from(String(number), Number);
    let tensForHundreds = +arrNum.slice(1).join("");
    let tens = +arrNum.slice(0).join("");
    let result = "";
    if (arrNum.length === 3) {
        result = `${zeroToNineteenArr[arrNum[0]]} hundred ${
            arrNum[2] === 0 && arrNum[1] > 1
                ? tenToNinety[arrNum[1]]
                : arrNum[1] === 1
                ? zeroToNineteenArr[tensForHundreds]
                : arrNum[1] > 1
                ? tenToNinety[arrNum[1]] + " " + zeroToNineteenArr[arrNum[2]]
                : arrNum[1] === 0 && arrNum[2] !== 0
                ? zeroToNineteenArr[arrNum[2]]
                : ""
        }`;
    }
    if (arrNum.length === 2) {
        result = `${
            arrNum[1] === 0 && arrNum[0] > 1
                ? tenToNinety[arrNum[0]]
                : arrNum[0] === 1
                ? zeroToNineteenArr[tens]
                : arrNum[0] > 1
                ? tenToNinety[arrNum[0]] + " " + zeroToNineteenArr[arrNum[1]]
                : ""
        }`;
    }
    if (arrNum.length === 1) {
        result = `${zeroToNineteenArr[arrNum[0]]}`;
    }
    return result.trim();
};
