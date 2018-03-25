module.exports = (itemsArray, serarchedItem) => {
    let min = 0;
    let max = itemsArray.length - 1;
    while (min <= max) {
    const mid = Math.round((min + max) / 2);
    if (itemsArray[mid] === serarchedItem) return mid;
    if (itemsArray[mid] < serarchedItem) min = mid + 1;
    if (itemsArray[mid] > serarchedItem) max = mid - 1;
    console.log('end', max);
    }
    return -1;
};
