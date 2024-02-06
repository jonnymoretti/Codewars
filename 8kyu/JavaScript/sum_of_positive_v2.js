function positiveSum(arr){
    let result = 0;

    for (num = 0; num < arr.length; num++){
        if (arr[num] > 0) {
            result += arr[num];
        }
    }
    return result;

}

const numbers = [1, -4, 7, 12];
const sum_numbers = positiveSum(numbers);
console.log(sum_numbers);