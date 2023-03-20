def max_end3(nums):
    max = 0
    for num in nums:
        if max < num: max = num
    return [max,max,max]