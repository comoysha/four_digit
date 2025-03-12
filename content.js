// Description: This file is injected into the page and runs in the context of the page.
// It is responsible for formatting the numbers on the page.
// It is also responsible for getting the user's settings from the storage.

console.log('content.js loaded'); // 日志

//数字格式化
const formatNumber = (number, separatorStyle) => {
    let formattedNumber = '';
    
    if (separatorStyle === 'option1') {
      formattedNumber = number.replace(/(\d)(?=(\d{4})+(?!\d))/g, '$1,');
    } else if (separatorStyle === 'option2') {
      // formattedNumber = parseInt(number).toLocaleString('zh-CN-u-nu-hanidec');
      formattedNumber = formatNumberToChinese(number);
    }
  
    return formattedNumber;
};

// 更新页面上的数字
const updatePageNumbers = (separatorStyle) => {
    console.log('updatePageNumbers called with separatorStyle:', separatorStyle); // 日志
    const allTextNodes = document.evaluate(
        '//text()[not(ancestor::script)][not(ancestor::style)]',
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    for (let i = 0; i < allTextNodes.snapshotLength; i++) {
        const textNode = allTextNodes.snapshotItem(i);
        console.log('Original text:', textNode.textContent);
        const newText = textNode.textContent.replace(
            /(\d{1,3}(?:,\d{3})*)(?!\d)/g, // 将这种数字(有千分位逗号分隔符的)
            (match) => formatNumber(match.replace(/,/g, ''), separatorStyle) // 替换为这种数字
        );
        console.log('New text:', newText); // 日志
        textNode.textContent = newText;
    }
};

// 从storage中获取separatorStyle
chrome.storage.sync.get('separatorStyle', ({ separatorStyle }) => { 
    if (!separatorStyle) {
      separatorStyle = 'option1';
    }
  
    updatePageNumbers(separatorStyle); // 格式化数字
});
  
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.separatorStyle) {
      updatePageNumbers(changes.separatorStyle.newValue);
    }
});

// 当您告诉我数字175023004500，我会告诉您：1750亿2千3百4十5万5千。
// 实际这个函数没有起到预期的作用,可能因为数字有千分位分隔符吧
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