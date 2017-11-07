#!/usr/bin/python

import json, random

def is_int(n):
    return str(n).isdigit()


indexes = range(4)
values = []
ops = []
opoptions = [ '+', '+', '+', '-', '*', '*', '/' ]

for i in range(4):
    values.append(random.choice([1, 2, 2, 2, 4, 4, 5, 5]))

numfloats = random.randrange(2)
for k in range(numfloats):
    which = random.randrange(len(indexes))
    index = indexes[which]
    values[index] = float(values[index])
    del indexes[which]

for i in range(3):
    if numfloats == 0 and is_int(values[i]) and is_int(values[i+1]) and values[i+1] > 1 and values[i+1] < values[i] and random.random() > 0.5:
        ops.append('%')
    else:
        ops.append(opoptions[random.randrange(len(opoptions))])

item = str(values[0])

for i in range(3):
    item += " " + ops[i] + " " + str(values[i+1])

answer = eval(item)

# print item
# print answer

print json.dumps({'item':item, 'answer':answer})

