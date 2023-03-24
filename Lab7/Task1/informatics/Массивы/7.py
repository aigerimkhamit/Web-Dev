n = int(input())
a = list(map(int, input().split()))
a = a[::-1]
for i in range(n):
    print(a[i], end = ' ')