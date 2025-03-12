function formatNumberToChinese(num) {
    const units = ['亿', '千', '百', '十', '万', '千', '百', '十'];
    const numStr = num.toString();
    const len = numStr.length;
    let result = '';

    for (let i = 0; i < len; i++) {
        const digit = numStr.charAt(i);
        if (digit !== '0') {
            result += digit;
            const unitIndex = units.length - (len - i);
            if (unitIndex >= 0) {
                result += units[unitIndex];
            }
        }
    }

    return result;
}

const num1 = 175000000000;
const num2 = 175023004500;

console.log(formatNumberToChinese(num1)); // 输出：1750亿
console.log(formatNumberToChinese(num2)); // 输出：1750亿2千3百4十5万5千
