def positive_sum(array):
    result = 0

    for num in array:
        if num > 0:
            result += num
    
    return result

numbers = [1, -4, 2, 10]
sum_results = positive_sum(numbers)
print(sum_results)