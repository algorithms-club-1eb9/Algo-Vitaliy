module.exports = class {
    constructor() {
}
sort() {
    }
    les() {
}
var items = [6, 5, 22, 3, 99, 3];  
function bubbleSort(items) {
	var length = items.length;
	for (var i = (length - 1); i >= 0; i--) {
		//Number of passes
		for (var j = (length - i); j > 0; j--) {
			//Compare the adjacent positions
			if (items[j] < items[j - 1]) {
				//Swap the numbers
				var tmp = items[j];
				items[j] = items[j - 1];
				items[j - 1] = tmp;
			}
		}
    }
}
bubbleSort(items);
console.log(items);


var arr = [7, 3, 15, 1, 9, 2, 1];
var min = 0
function selectionSort(arr) {
    for(min; min < arr.length-1; min++) {
    	var least = min;
    	for (var i = min + 1; i < arr.length; i++) {
            if(arr[i] < arr[least]) {
                least = i;
            }
        }
        var tmp = arr[min];
        arr[min] = arr[least];
        arr[least] = tmp; 
	}
}
selectionSort(arr); console.log(arr);


const list = [5, 32, 1, 13, 0, 8, 11, 2];
function insertionSort(val) {
for (var i = 0; i < val.length; i++) {
	let value = val[i]
	for(var j = i - 1; j > -1 && val[j] > value; j--) {
		val[j + 1] = val[j]
	}
	val[j + 1] = value
}
return list
}
console.log(insertionSort(list));

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));


}

