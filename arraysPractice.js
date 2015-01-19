//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

  var first = function() {
    return arr[0];
  }
first(arr);

//class answer
var first = function() {
  return arr[0]
}
first(arr);


var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.


  //Code Here
var last = function() {        
     return arr[arr.length - 1];                                  
}                                 
                                    
last(arr);

//class problem
function last (arr) {
  return arr[arr.length -1];
}
last(arr);

var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  var looper = function() {
    for (var i = 0; i < family.length; i++)
      alert(family[i]);
  }
  looper(family);


//class answer

var looper = function(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}
looper(family);


var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  var reversedLooper = function() {
    for (var i = letters.length - 1; i >= 0; i--){
            alert(letters[i]);
    };
  }
  reversedLooper(letters);


//class answer

var reverseLooper = function(myArray) {
 for ( var i = myArray.length; i > 0; i--){
  console.log(myArray[i - 1]);
 }

}
reverseLooper(letters);


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  var evenFinder = function() {
    for(var i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0 )  {
        nums.splice(i, 1);
        i--; // you do this because when it loops and splices things out items are removed therefore they are shifted down a position and the loop could skip it. i-- subtracts a value everytime you splice osmething out.
      }
    }
  }
  evenFinder(nums);
  nums;


//Next problem


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [,312,432,532];//I added these numbers for testing purposes
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).

var divider = function() {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0){
      evens.push(nums[i]) // ask if there is a way you can do it using the slice method!!!!!!
    } else {
    odds.push(nums[i]) } 
  }

}
divider(nums, evens, odds);


//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false

var finder = function(random) {
   for (var i = 0; i < numbers.length; i++) {
 if (numbers[i] === random) {
   return true;
  }
   }
return false;
};
finder(getRandomArbitrary());
//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

var reverse = function(str) {
 return str.split(" ").reverse().join(" ");
}
reverse(str);


//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. Once you do that,
  write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  var removeItem = function(myList, remove) {

    for (var i = 0; i < myList.length; i++) {
      if (myList[i] === remove) {
        myList.splice(i, 1);
      }
    }
    console.log(myList);
}
removeItem(myGroceryList, 'chips');

var addItem = function(myList, add) {
  myList.push(add);
  console.log(myList);
}
addItem(myGroceryList, 'Jerky');




//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  var maker = function(arr) {
    arr = [];// empty array
    for (var i = 1; i <= 215; i++) { // basically looping through the numbers 1 thourhg 215 and then pushing all of them to an array
      arr.push(i);
      console.log(arr);
    }
  };
  maker();



//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

var addTen = function(arr) {
 for (var i = 0; i < arr.length; i++) {
  arr = parseInt(arr[i]) + 10[i];

 }
 return arr;
}
addTen(numbers);



//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

 var adds = function(first, second) {
    if (arr1.length > arr2.length) {
      return arr1;
    } else { 
      return arr2;
    }
 }
 console.log(arr1);
 console.log(arr2);
  adds(arr1, arr2);


/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
var both */

var both = function(new1, new2) {
var newA = arr1.concat(arr2);)
console.log(newA);
}
both(arr1, arr2);


//morning challenge write a function called finder that accepts two parameters, the first one is a string and the second is an array.
// have your function return true if the string is found in the array and false if it is not.

var nums = ["hello", "javascript", "awesome"];

var finder = function(string, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === string) {
      return true;
    }
  } 
  return false;
}

finder("awesome", nums);


// the answer

var words = ['cool','awesome','Tim'];
var finder = function(string, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === words) {
      return true;
    }
  }
  return false;
}
finder('awesome', words);

// one line answer

var oneLine = (string, myArray {
  return myArray.indexOf(string) > -1 ? true : false;
}
oneLine("awesome", words)






