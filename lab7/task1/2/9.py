if __name__ == '__main__':
    alist = []
    for i in range(int(input())):
        name = input()
        score = float(input())
        alist.append([name, score])
st = sorted(set([score for name, score in alist]))[1]
print(sorted([name for name, score in alist if score == st]))