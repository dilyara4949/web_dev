if __name__ == '__main__':
    n = int(input())
    marks = {}
    sonuc = 0
    average = float()
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        marks[name] = scores
    query_name = input()
    for i in marks[query_name]:
        sonuc += i
    average = sonuc / len(marks[query_name])
    print(average)