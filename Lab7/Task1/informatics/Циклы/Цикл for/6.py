x = int(input())
divisors = 1
for i in range(2, int(x**0.5)+1):
    count = 0
    while x % i == 0:
        count += 1
        x //= i
    if count > 0:
        divisors *= (count + 1)

if x > 1:
    divisors *= 2

print(divisors)