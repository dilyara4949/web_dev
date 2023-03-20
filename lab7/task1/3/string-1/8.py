def left2(str):
    word = ''
    n = len(str)
    for i in range(2,n-1):
        word+= str[i]
    return word+str[0]+str[1]
