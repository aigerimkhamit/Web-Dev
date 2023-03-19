n = int(input())
binary = bin(n)[2:]
if binary.count('1') == 1:
    print('YES')
else:
    print('NO')