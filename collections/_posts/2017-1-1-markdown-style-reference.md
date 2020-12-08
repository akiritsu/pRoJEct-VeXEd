---
title: Text Styles and Markdown Quick Reference
author: DeerRIDER
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
category: Sample
date: 2019-5-25
excerpt: "This is excerpt."
abstract: "This is abstract. Abstract is blank by default."
---

## Style Test Below

### Text

The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.

> blockquote
>
>Den wa Stad Schuebersonndeg, op all d'Pan hinnen. Ké net geet sech Mier, ass gutt Kaffi an. 

Encrypted text (Key = "233"):<br>
<p class="encrypted" id="elKwQPCOLF4w86wRItKMqge8qDO6fU80wbdANG6AnS8kgT8qAqGFC5VkVexu+4RBhBMUWwdkzEVo8HAKUT">Encrypted Text! Please enter correct token.</p>

### Font style and link
* normal
* **bold**
* *italic*
* ~~strikethrough~~
* `keyword`
* [Link to Google](www.google.com)

### Code

```python
# Python program for implementation of Quicksort Sort 
  
# This function takes last element as pivot, places 
# the pivot element at its correct position in sorted 
# array, and places all smaller (smaller than pivot) 
# to left of pivot and all greater elements to right 
# of pivot 
def partition(arr,low,high): 
    i = ( low-1 )         # index of smaller element 
    pivot = arr[high]     # pivot 
  
    for j in range(low , high): 
  
        # If current element is smaller than or 
        # equal to pivot 
        if   arr[j] <= pivot: 
          
            # increment index of smaller element 
            i = i+1 
            arr[i],arr[j] = arr[j],arr[i] 
  
    arr[i+1],arr[high] = arr[high],arr[i+1] 
    return ( i+1 ) 
  
# The main function that implements QuickSort 
# arr[] --> Array to be sorted, 
# low  --> Starting index, 
# high  --> Ending index 
  
# Function to do Quick sort 
def quickSort(arr,low,high): 
    if low < high: 
  
        # pi is partitioning index, arr[p] is now 
        # at right place 
        pi = partition(arr,low,high) 
  
        # Separately sort elements before 
        # partition and after partition 
        quickSort(arr, low, pi-1) 
        quickSort(arr, pi+1, high) 
  
# Driver code to test above 
arr = [10, 7, 8, 9, 1, 5] 
n = len(arr) 
quickSort(arr,0,n-1) 
print ("Sorted array is:") 
for i in range(n): 
    print ("%d" %arr[i]), 
  
# This code is contributed by Mohit Kumra 
```

### Formula

$$
NADH+Q+5\;H_{matrix}^{+}\rightarrow NAD^{+}+QH_{2}+4\;H_{intermembrane}^{+}\!
$$

### List
1. ordered list item 1
2. ordered list item 2
   1. sublist
      1. subsublist
* unordered list  
     
* unordered sublist
  * subsublist
    * subsubsublist

### Horizontal line

***

### Table

| Date         | Version   | Size    | Comment                |
| :----------- | :-------- | :------ | :--------------------- |
| Nov 11, 2018 | v2.14c    | 240 kb  | No irreversible damage |
| Nov 12, 2018 | v2.14c    | 1230 kb | No irreversible damage |
| Nov 13, 2018 | v2.14c    | 12kb    | No irreversible damage |
| Nov 15, 2018 | v1.99 LTS | 4kb     | Irreversible damage    |

### image
![img-smpl]({{site.url}}{{site.baseurl}}/src/assets/img/img-sample.jpg)
# This is heading 1
## This is heading 2
The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
## This is another heading 2
### This is heading 3
Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.
#### This is heading 4
Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. 
##### This is heading 5
Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!
###### This is heading 6
Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox.