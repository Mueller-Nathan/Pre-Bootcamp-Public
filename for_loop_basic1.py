#1
for x in range(0, 151, 1):
    print(x)
#2
for x in range(5, 1001, 5):
    print(x)
#3
for x in range(1, 101, 1):
    if x % 5 == 0:
        print("Coding")
    elif x % 10 == 0:
        print("Dojo")
    else:
        print(x)
#4
sum = 0
for x in range(0, 500000, 1):
    if x % 2 == 1:
        sum += x
        print(sum)
#5
for x in range(2018, 0, -4):
    print(x)
#6
def counter(lowNum, highNum, mult):
    for x in range(lowNum, highNum):
        if x % mult == 0:
            print(x)
