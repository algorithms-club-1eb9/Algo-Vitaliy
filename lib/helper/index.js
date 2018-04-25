module.exports = {
    less(a, b) {
        return b < a;
    },

    swap(input, indexOne, indexTwo) {
        const temp = input[indexOne];
    
        input[indexOne] = input[indexTwo];
        input[indexTwo] = temp;
    },
 connect(left, right) {
     const result = [];
     let indexLeft = 0;
     let indexRight = 0;
     while (indexLeft < left.length && indexRight < right.length) {
         if (left[indexLeft] < right[indexRight]) {
             result.push(left[indexLeft]);
             indexLeft += 1;
         } else {
             result.push(right[indexRight]);
             indexRight += 1;
         }
     }
return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
},

dividing(items, left, right) {
    const separator = items[Math.floor((right + left) / 2)];
    let i = left;
    let y = right;
    while (i <= y) {
        while (items[i] < separator) {
            i += 1;
        }
        while (items[y] > separator) {
            y -= 1;
        }
        if (i <= y) {
            this.swap(items, i, y);
            i += 1;
            y -= 1;
        }
}
return i;
}
}

