def returnNegative(num):
    if num > 0:
        return -num
    elif num == 0:
        return 0
    else:
        return num
    
print(returnNegative(-1))
print(returnNegative(0))
print(returnNegative(4))
print(returnNegative(0.12))