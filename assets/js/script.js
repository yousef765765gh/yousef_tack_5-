// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"

function revers (z){
    let y ="" ;
    for(let i = (z.length -1); i >= 0 ; i--){
        y += z[i] ;
    }
    return y ;
}
console.log(revers("javascript"))

console.log("___________________________________________")

// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function palindrome_check (x){
    let word = "";
    let y = true ;
    for(let i = 0 ; i < (x.length -1)/ 2 ; i++){
        if(x[i] == x[x.length - 1]){
            x.length-- ;
            y = true ;
        }else{
            y = false ;
        }
    return y ;
    }
}
console.log(palindrome_check("madam"))
console.log(palindrome_check("yousef"))



console.log(("_____________________________________________"))


// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9

function maximum (x){
    let max = x[0]
    for(let i = 0 ; i < (x.length ) ; i++){
            if(x[i] > max){
                max = x[i] ;
            }
        }
        return max ;
    }
console.log(maximum([1,5,3,9,2]))
console.log(maximum([1,15,3,9,2]))
console.log(maximum([1,5,3,9,10]))

console.log("_________________________________________")

// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120

function factorial_calculation(x){
    let output = 1 ;
    for(let i = x ; i > 0 ; i--){
        output = output * i ;
    }
    return output ;
}
console.log(factorial_calculation(5))
console.log(factorial_calculation(3))



console.log("______________________________________")
// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)

function prime_num (x){
    if(x < 2){
        return false;
    }
    if (x==2){
        return true;
    }
    if(x % 2 == 0){
        return false
    }
    for (let i = 3 ; i * i < x ; i +=2 ){
        if(x % i == 0){
            return false;
        }
    }
    return true ;
}
console.log(prime_num(7))
console.log(prime_num(10))

console.log("___________________________")

// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function remove (x) {
    for(let i = 0 ; i < x.length ; i++ ){
        for (let j = i+1 ; j < x.length ; j++){
            if(x[i] == x[j]){
                    for(let k = j; k < x.length - 1; k++) {
                    x[k] = x[k + 1];
                }
                x.length--;
                j--; 
            }
        }
    }
    return x ;
}

console.log(remove([1,2,2,3,4,4,5]))
console.log(remove([1,1,1,2,2,4,5,6,6]))


console.log("________________________________")



// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55. 
// Output: 55

function find_missing_num(x){
    let min = x[0] ;
    let max = x[0]
    for(let i =1 ; i < x.length ; i++ ){
        if(x[i]< min) min = x[i] ;
        if(x[i] > max) max = x[i] ;
    }
    let sum = 0 ;
    for(i = min ; i <= max ; i++ ){
        sum += i ;
    }
    let sum_x = 0;
    for(let j=0 ; j < x.length ; j++){
        sum_x += x[j] ;
    }
    return sum - sum_x
}
console.log(find_missing_num([1,2,3,4,5,6,8,9,10]))


console.log("__________________________________")

// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"


function capitalize_word(sentence){
    let final_sentence = "" ;
    let capitale_next = true ;
    for(let i = 0 ; i < sentence.length ; i ++){
        if(sentence[i] == ' '){
            final_sentence +=' ' ;
            capitale_next = true ;
        }else{
            if(capitale_next){
                final_sentence += sentence[i].toUpperCase();
                capitale_next = false ;
            }else{
                final_sentence += sentence[i] ;
            }
        }
    }
    return final_sentence ;
}

console.log(capitalize_word("hello world from javascript"))

console.log("__________________________________________________")



// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false


function anagram_check(x1 , x2){
    if(x1.length !== x2.length) return false ;
    let used = []
    for(let i = 0 ; i < x1.length ; i++){
        let found = false ;
        for(let j = 0 ; j< x2.length ; j++){
            if(x1[i] == x2[j] && !used[j]){
                used[j]=true ;
                found = true ;
                break;
            }
        }
        if(!found){
            return false ;
        }
    }
    return true 
}


console.log (anagram_check("hello" , "world"))
console.log (anagram_check("listen" , "silent"))


console.log("__________________________")


// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

function Chunk_array(arr, x){
    let arr2 = []
    for(let i = 0 ; i < arr.length ; i+=x){
        let arr3 = []
        for(let  j = 0 ; j <x && i+j < arr.length ;j++){
            arr3[j]=arr[i+j]
        }
        arr2[arr2.length]=arr3
    }
    return arr2;
}
console.log(Chunk_array([1,2,3,4,5,6,7],3))
console.log(Chunk_array([1,2,3,4,5,6,7],5))
console.log(Chunk_array([1,2,3,4,5,6,7,8,9,10],4))

console.log("_______________________________________")

// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

function find_pair_number(arr , num){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1; j < arr.length ; j++){
            if(arr[i]  + arr[j]== num && arr[i] !== num && arr[j] !== num && arr[i] !== arr[j]){
                return [arr[i] , arr[j]] ;
            }
        }
    }
    return []
}


console.log(find_pair_number([10, 5, 2 , 7, 8, 3] , 10))
console.log(find_pair_number([10, 1, 4, 9, 7, 3] , 9))



console.log("____________________________________________")


// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]


function rotate_to_left(arr , n){
    let arr2 =[]
    for(let i = n  ; i < arr.length ; i++){
        arr2[arr2.length] = arr[i]
    }
    for(let j = 0 ;j < n ; j++){
        arr2[arr2.length] = arr[j]
    }
    return arr2
}



console.log(rotate_to_left([1 ,2 ,3 ,4 ,5] , 2))
console.log(rotate_to_left([1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9] , 4))


console.log("________________________________________________")

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function find_repeated_numbers(arr1 , arr2){
    let repeat = [] ;
    let used =[]
    for (let i = 0; i < arr2.length; i++) {
        used[i] = false;
    }
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j++){
            if( arr1[i] == arr2[j] && !used[j]){
                repeat[repeat.length] = arr1[i];
                used[j] = true ;
                break ;
            }
        }
    }
    return repeat ;
}


console.log(find_repeated_numbers([1, 2, 3, 4], [3, 4, 5, 6]))
console.log(find_repeated_numbers([1, 2, 3, 4 ,5 ,6 ,7 , 7, 7], [3, 4, 5, 6 ,7 ,7]))



console.log("_________________________________________")


// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }


function Count_character(word){
    let x = [];
    let used = [] ;
    for (let i = 0; i < word.length; i++) {
        used[i] = false;
    }
    for(let i = 0 ; i <word.length ; i++){
        if(!used[i]){
            let Count = 1 ;
            for(let j = i+1 ; j < word.length ; j++){
                if(word[i] == word [j]){
                    Count++ ;
                    used[j] = true ;
                }
            }
        x[x.length] = word[i] + ":" + Count ;
        }
    }
    return x
}
console.log(Count_character("hello"))
console.log(Count_character("aalllaaalllr"))

console.log("______________________________")

// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

function flatten_array(arr) { 
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let sub_arr = arr[i];
        if (Array.isArray(sub_arr)) {  
            let arr2 = flatten_array(sub_arr);
            for (let j = 0; j < arr2.length; j++) {
                output[output.length] = arr2[j];
            }
        } else {
            output[output.length] = sub_arr;
        }
    }
    return output;
}

console.log (flatten_array([1, [2, 3], [4, [5, 6]]]))
console.log (flatten_array([1, 2,[1 , [3,4,[6,7]]]]))



console.log("_____________________________________________")



// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"


function longest_word(word){
    let longest = "" ;
    let thisWord = "" ;
    let maxLength = 0 ;
    for (let i = 0 ; i <= word.length; i++) {
        if (i == word.length || word[i] == " ") {
            if (thisWord.length > maxLength) {
                maxLength = thisWord.length;
                longest = thisWord;    
            }
            thisWord = ""; 
            
        }else{
            thisWord += word[i];
        }
    }
    return longest;
}


console.log(longest_word("The quick brown fox jumped over the lazy dog"))
console.log(longest_word("welcome to this world"))



console.log("________________________________________")
// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'


function most_frequent_element(arr){
    let max = arr[0] ;
    let count = 0 
    for(let i = 0 ; i < arr.length ; i++){
        let count_i = 0
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[i] == arr[j]){
                count_i++ ;
            }
        }
        if(count_i > count){
            count = count_i ;
            max = arr[i] ;
        }
    }
    return max ;
}

console.log(most_frequent_element([1, 2, 3, 2, 2, 4, 5, 2]))
console.log(most_frequent_element(['a', 'b', 'c', 'a', 'b', 'a']))
console.log(most_frequent_element(['a', 'b', 'c','b', 'a', 'b','b', 'a']))


console.log("_____________________________________________")

// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)


function sort_arr_age(arr){
    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < arr.length - i -1; j++) {
            if (arr[j].age > arr[j + 1].age) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
                }
            }
        }
    return arr;
}

console.log(sort_arr_age([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }])) ;


console.log("__________________________________________________________")


// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

function first_non_repeating(x){
    for(let i = 0 ; i < x.length ; i++){
        let found = false ;
        for(let j = 0 ; j < x.length ; j++){
            if(i !== j && x[i] == x[j]){
                found = true ;
                break ;
            }
        }
        if(!found){
            return x[i];
        }
    }
    return null ;
}


console.log(first_non_repeating("swiss"))
console.log(first_non_repeating("aabbcc"))
console.log(first_non_repeating("hhhaabbcc"))


console.log("___________________________________________")

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

function Symmetric_arrays(arr1 , arr2){
    let final_arr = [] ; 
    for(let i = 0 ; i < arr1.length ; i++){
        let found = false ;
        for(let j = 0 ; j < arr2.length ; j++){
            if(arr1[i] == arr2[j]){
                found = true ;
                break
            }
        }
        if(!found){
            final_arr[final_arr.length]=arr1[i] ;
        }
    }
    for(let i = 0 ; i < arr2.length ; i++){
        let found = false ;
        for(let j = 0 ; j < arr1.length ; j++){
            if(arr2[i] == arr1[j]){
                found = true ;
                break
            }
        }
        if(!found){
            final_arr[final_arr.length]=arr2[i] ;
        }
    }
    return final_arr ;
}
console.log(Symmetric_arrays([1, 2, 3], [3, 4, 5]))
console.log(Symmetric_arrays([1, 2, 3 , 4, 5, 7], [3, 4, 5, 6, 7,8 ]))