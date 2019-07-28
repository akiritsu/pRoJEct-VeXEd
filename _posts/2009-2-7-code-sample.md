---
title: Sample Code - Quick Sort
layout: post
category: Sample
date: 2019-2-4
---

## Quick sort in python

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
## Quick sort in haskell

```haskell
quicksort :: ( Ord a ) = > [ a ] -> [ a ]
quicksort [] = []
quicksort ( x : xs ) =
    let smallerSorted = quicksort [ a | a <- xs , a <= x ]
        biggerSorted = quicksort [ a | a <- xs , a > x ]
    in smallerSorted ++ [ x ] ++ biggerSorted
```

## Quick sort in scheme

```scheme
(define (quicksort lst)
  (cond
    ((or (null? lst) ; empty list is sorted
         (null? (cdr lst))) ; single-element list is sorted
     lst)
    (else
      (let ((pivot (car lst)) ; Select the first element as the pivot
            (rest (cdr lst)))
        (append
          (quicksort ; Recursively sort the list of smaller values
            (filter (lambda (x) (< x pivot)) rest)) ; Select the smaller values
          (list pivot) ; Add the pivot in the middle
          (quicksort ; Recursively sort the list of larger values
            (filter (lambda (x) (>= x pivot)) rest))))))) ; Select the larger and equal values
```

## Quick sort in java

```java
package com.theme.rouge;

public class MyQuickSort {
	
	private int array[];
	private int length;

	public void sort(int[] inputArr) {
		
		if (inputArr == null || inputArr.length == 0) {
			return;
		}
		this.array = inputArr;
		length = inputArr.length;
		quickSort(0, length - 1);
	}

	private void quickSort(int lowerIndex, int higherIndex) {
		
		int i = lowerIndex;
		int j = higherIndex;
		// calculate pivot number, I am taking pivot as middle index number
		int pivot = array[lowerIndex+(higherIndex-lowerIndex)/2];
		// Divide into two arrays
		while (i <= j) {
			/**
			 * In each iteration, we will identify a number from left side which 
			 * is greater then the pivot value, and also we will identify a number 
			 * from right side which is less then the pivot value. Once the search 
			 * is done, then we exchange both numbers.
			 */
			while (array[i] < pivot) {
				i++;
			}
			while (array[j] > pivot) {
				j--;
			}
			if (i <= j) {
				exchangeNumbers(i, j);
				//move index to next position on both sides
				i++;
				j--;
			}
		}
		// call quickSort() method recursively
		if (lowerIndex < j)
			quickSort(lowerIndex, j);
		if (i < higherIndex)
			quickSort(i, higherIndex);
	}

	private void exchangeNumbers(int i, int j) {
		int temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	public static void main(String a[]){
		
		MyQuickSort sorter = new MyQuickSort();
	    int[] input = {24,2,45,20,56,75,2,56,99,53,12};
	    sorter.sort(input);
	    for(int i:input){
	    	System.out.print(i);
	    	System.out.print(" ");
	    }
	}
}
```