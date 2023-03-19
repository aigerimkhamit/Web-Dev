a = int(input())
b = int(input())

if len(a) == 4:
    if a == a[::-1]:
        if b == 1:
            print("YES")
        else:
            print("NO")
    else:
        if b != 1:
            print("YES")
        else:
            print("NO")
else:
    if b != 1:
        print("YES")
    else:
        print("NO")
