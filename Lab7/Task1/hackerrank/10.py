# Read input values
n = int(input())
s = set(map(int, input().split()))
num_commands = int(input())

# Process commands
for i in range(num_commands):
    cmd = input().split()
    if cmd[0] == 'pop':
        s.pop()
    elif cmd[0] == 'remove':
        s.remove(int(cmd[1]))
    elif cmd[0] == 'discard':
        s.discard(int(cmd[1]))

# Print sum of elements in set
print(sum(s))
