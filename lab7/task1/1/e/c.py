def xor(x: bool, y: bool) -> bool:
    return (x or y) and not (x and y)

x = int(input())
y = int(input())

print(int(xor(x, y)))