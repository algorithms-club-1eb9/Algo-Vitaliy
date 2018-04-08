let array_length;
let heap_root = (input, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let maxValue = i;

    if (left < array_length && input[left] > input[maxValue]) {
        maxValue = left;
    }
    if (right < array_length && input[right] > input[maxValue]) {
        maxValue = right;
    }

    if (maxValue != i) {
        swap(input, i, maxValue);
        heap_root(input, maxValue);
    }
}
let swap = (input, index_One, index_Two) => {
    var temp = input[index_One];

    input[index_One] = input[index_Two];
    input[index_Two] = temp;
}

let heapSort = (input) => {
    array_length = input.length;
    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i);
    }
    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;

        heap_root(input, 0);
    }
}
let arr = [7, -2, 3, 12, 5, -1, 13, 7];
heapSort(arr);
console.log(arr);

