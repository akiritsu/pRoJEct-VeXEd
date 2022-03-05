---
title: Advent of Code 2018 - Sample
category: Article
author: 読み上げ
post_list: "date"
collection_list: true
toc: true
show_date: true
publish: true
home_btn: true
btn_text: true
footer: true
maximize: true
encrypted_text: true
toc_level: 4
date: 2018-6-12
excerpt: "Advent of Code 2018 - Sample."
---

## Advent of Code is free to use.

However, building and running Advent of Code takes a significant amount of my time and energy. If you like Advent of Code, would like more things like it in the future, and are able to do so, please support Advent of Code.

Your contributions support things like:

Infrastructure (hosting, bandwidth, etc)
Time spent running Advent of Code events
Time spent building puzzles
More future projects
My sushi addiction

### Day One
```python
#Instructions: https://adventofcode.com/2018/day/1

with open('codes.txt','r') as f:
  codes = f.read().splitlines()

#Part one:
c = 0
for i in codes:
  c = eval(str(c)+i)
print(f"Answer #1: {c}")

#Part two:
twice = []
c, r = (0, 0)
while r != -1:
  r += 1
  if r % 10 == 0:
    print(f"Attempt #{r}")
  for i in codes:
    c = eval(str(c)+i)
    if c in twice:
      print(f"Answer #2: {c}")
      r = -1
      break
    twice.append(c)
```
### Day Two
```python
#Instructions: https://adventofcode.com/2018/day/2
import time
from string import ascii_lowercase as alpha

with open('codes.txt','r') as f:
  codes = f.read().splitlines()


#Part one

twice, thrice = (0, 0)
for code in codes:
  two, three = True, True
  for letter in alpha:
    if code.count(letter) == 2 and two == True:
      twice += 1
      two = False
    elif code.count(letter) == 3 and three == True:
      thrice += 1
      three = False
print(twice*thrice)

#Part two
start = time.time()
final = []
def run():
  for code in codes:
    for hashPos in range(len(code)):
      tCode = list(code)
      tCode[hashPos] = "#"
      tCode = ''.join(tCode)
      if tCode in final:
        print(f"Found: {tCode.replace('#','')}")
        return ""
      final.append(''.join(tCode))
end = time.time()
print(f"Time: {end - start}")
```
### Day Three
```python
#Instructions: https://adventofcode.com/2018/day/3
grid = [[0 for j in range(1000)] for i in range(1000)]

with open('codes.txt','r') as f:
  codes = f.read().splitlines()

positions = [i.split(" ")[2][:-1].split(",") for i in codes]
sizes = [i.split(" ")[-1].split("x") for i in codes]


#Part one
for i in range(len(codes)):
  pos = (int(positions[i][0]), int(positions[i][1]))
  size = (int(sizes[i][0]), int(sizes[i][1]))
  for y in range(pos[1], pos[1]+size[1]):
    for x in range(pos[0], pos[0]+size[0]):
      grid[x][y] += 1

print(len([i for j in grid for i in j if i > 1]))

#Part two
for i in range(len(codes)):
  pos = (int(positions[i][0]), int(positions[i][1]))
  size = (int(sizes[i][0]), int(sizes[i][1]))
  ones = 0
  for y in range(pos[1], pos[1]+size[1]):
    for x in range(pos[0], pos[0]+size[0]):
      if grid[x][y] == 1:
        ones += 1
  if ones == (size[0]*size[1]):
    print(i+1)
    break
```
### Day Four
```python
#Instructions: https://adventofcode.com/2018/day/4
from collections import defaultdict

with open('codes.txt','r') as f:
  codes = f.read()
  codes = codes.splitlines()
  codes.sort()

guards = defaultdict(lambda: {str(i).zfill(4):0 for i in [j for j in range(0000,60)]})

times = []
for count, code in enumerate(codes):
  time = int(code[12:17].split(":")[1])
  times.append(time)
  if code.split(" ")[3][0] == "#":
      currentGuardNo = code.split(" ")[3]
  if "wakes" in code and "falls" in codes[count-1]:
      for i in range(times[count-1], time):
        guards[currentGuardNo][str(i).zfill(4)] += 1

#Guard name1, most freq minute, total mins asleep, Guard name2, most freq min asleep
mostMins = [0,0,0,0,0,0]
for guard in guards:
    guardTimes = guards[guard]
    biggest = max(guardTimes, key=guardTimes.get)
    total = sum([n for n in guardTimes.values()])
    if total > mostMins[2]:
      mostMins = [guard, biggest, total]+mostMins[3:]
    if guardTimes[biggest] > mostMins[4]:
      mostMins = mostMins[:3]+[guard, guardTimes[biggest], biggest]

print("Guard %s slept the most (%d minutes)." % (mostMins[0], mostMins[2]))
print("Their most frequent minute to sleep was %s." % mostMins[1])
print("The flag for part one is (%s * %s) %d." % (mostMins[0][1:], mostMins[1], int(mostMins[0][1:])*int(mostMins[1])))

print("Guard %s was most frequently asleep on the same minute (%s)." % (mostMins[3], mostMins[-1]))
print("The flag for part two is (%s * %s) %d." % (mostMins[3][1:], mostMins[-1], int(mostMins[3][1:])*int(mostMins[-1])))
```
### Day Five
```python
#Instructions: https://adventofcode.com/2018/day/5
import time
from string import ascii_lowercase

with open('input.txt','r') as f:
  d = f.read()

data = d
#Part one
start = time.time()
i = 0
while True:
  cD = data
  for c in range(len(data)):
    try:
      if data[c].lower() == data[c+1].lower() and data[c] != data[c+1]:
        data = data[:c]+data[c+2:]
    except:
      continue
  if cD == data:
    break
  i += 1
results = [len(data), i]
end = time.time()

print(f"New length: {results[0]}")
print(f"Found in iteration #{results[1]}, in {end-start} seconds.")


smallest = [0,len(d)]
#Part two
for char in ascii_lowercase:
    print(f"Attempting: {char}")
    data = d.replace(char.upper(),"").replace(char,"")
    while True:
      cD = data
      for c in range(len(data)):
        try:
          if data[c].lower() == data[c+1].lower() and data[c] != data[c+1]:
            data = data[:c]+data[c+2:]
        except:
          continue
      if cD == data: break
    if len(data) < smallest[1]:
        smallest = [char, len(data)-1]

print(f"The smallest possible string is made by removing '{smallest[0]}', and results in {smallest[1]} chars.")
```
### Day Six
```python
#Instructions: https://adventofcode.com/2018/day/6

#Generate coords
with open('input.txt','r') as f:
    coords = [[int(j) for j in pair] for pair in [i.split(", ") for i in f.read().splitlines()]]
x = max(coords)[0]+10
y = max(i[1] for i in coords)+10

#Generate Grid
grid = [["_" for j in range(y)] for i in range(x)]
alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
for char, pair in enumerate(coords):
  grid[pair[1]][pair[0]] = alpha[char]

partTwo = 0
for r in range(x):
  for c in range(y):
    dists = []
    partTwoTotal = 0
    for pair in coords:
      dist = abs(r-pair[1])+abs(c-pair[0])
      partTwoTotal += dist
      dists.append([dist, pair])
    if partTwoTotal < 10000:
      partTwo += 1
    if [c,r] in coords: continue
    big = min(dists)
    if [i[0] for i in dists].count(big[0]) > 1:
      grid[r][c]  = "."
    else:
      grid[r][c]  = grid[big[1][1]][big[1][0]]

for c in alpha:
  if any(c in i for i in grid[0]+grid[-1]):
    print(f"{c} is on edge.")
    alpha = alpha.replace(c,"")
    continue
  if any(c in i for i in [row[0] for row in grid]+[row[-1] for row in grid]):
    print(f"{c} is on edge.")
    alpha = alpha.replace(c,"")

print(alpha)
gridString = ''.join(i for j in grid for i in j)
alphaNum = {gridString.count(c):c for c in alpha}

print(f"The most frequent letter was {alphaNum[max(alphaNum)]} with {max(alphaNum)} occurences.")
print(f"Flag for part two: {partTwo}.")
```
## Download and Documentation

[**Advent of Code**(homepage)](https://adventofcode.com/2018)

[nneonneo (eqgrp-free-file)](https://github.com/nneonneo/eqgrp-free-file.git)
  
[nneonneo (ffsend)](https://github.com/nneonneo/ffsend.git)
  
[nneonneo (pwn-stuff)](https://github.com/nneonneo/pwn-stuff.git)
  
[nneonneo (pwntools)](https://github.com/nneonneo/pwntools.git)
  
[nneonneo (steam-phishing-analysis)](https://github.com/nneonneo/steam-phishing-analysis.git)
  
[nneonneo (websocket-client)](https://github.com/nneonneo/websocket-client.git)
  
[nneonneo (pyelftools)](https://github.com/nneonneo/pyelftools.git)
  
[nneonneo (bpftools)](https://github.com/nneonneo/bpftools.git)
  
[nneonneo (letsencrypt)](https://github.com/nneonneo/letsencrypt.git)

## Documentation

[aoc2018 (download)](https://github.com/readloud/Advent-of-Code.git)
