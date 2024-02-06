function positiveSum(arr) {
    let result = 0;

    for (let num of arr) {
        if (num > 0){
            result += num;
        }
    }
    return result;
}

const numbers = [1, -4, 7, 12];
const sum_numbers = positiveSum(numbers);
console.log(sum_numbers);