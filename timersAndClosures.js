//Ex. 1
/*
Write a function called createCounter. 
This function should contain a variable count that is initialized to 0. 
This function should return another function that when invoked, 
increments the counter by 1 and returns the count variable. 
You should be able to create multiple counters with the createCounter function 
and they should all have their own private variable called count.
*/
function createCounter(){
    let count = 0;
    return function addToCounter(){
        return ++count;
    }
}

let firstCounter = createCounter();
firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3

let secondCounter = createCounter();
secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

let thirdCounter = createCounter();
thirdCounter(); // 1
thirdCounter(); // 2
thirdCounter(); // 3

/*Ex.2
Write a function called countdown that accepts a number as a parameter and
every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log "DONE!" and stop.
*/

function countdown(num){
    timerId = setInterval(function(){
        if (num <= 0){
            console.log('DONE!');
            clearInterval(timerId);
        }else{
            console.log(--num);
        }
    }, 1000);
}


//test
countdown(4); // 3,2,1, 'DONE!'

/*Ex.3
Write a function called randomGame that selects a random number
 between 0 and 1 every 1000 milliseconds and each time that a random number
  is picked, add 1 to a counter. If the number is greater than .75, stop the timer and
return the number of tries it took before we found a number greater than .75
*/
function randomGame(){
    let counter = 0;
    let timerId = setInterval(function(){
        let num = Math.random();
        if (num > .75){
            console.log(counter);
            clearInterval(timerId);
        } else {
            console.log("It took " + counter++ + " tries");
        }
    }, 1000);
}

//test
randomGame();

/*Ex. 4
Write a function called isEven which takes in a number and 
returns true if the number is even and returns false if it is not
*/
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
};
//test
isEven(8);

/*Ex. 5
Write a function called isOdd which takes in a number and 
returns true if the number is odd and returns false if it is not
*/
function isOdd(num){
    if(num % 2 !== 0){
        return true;
    } else {
        return false;
    }
};
//test
isOdd(8); // false

/*Ex. 6
Write a function called isPrime which takes in a number and 
returns true if the number is a prime number (is greater than 1 and 
    can only be divided in whole by itself and 1), otherwise returns false
*/
function isPrime(num){
    for(let i = 2; i < num; i++)
      if(num % i === 0){
        return false;
      } 
    return num > 1;
  }

isPrime(8);//false

/*Ex. 7
Write a function called numberFact which takes in a number and
 a callback and returns the result of the callback with the number passed to it
*/
function numberFact(num, fn){
    return fn(num);
}
//test
numberFact(50, isOdd); //false

/*Ex. 8
Write a function called find. It should take in an array and 
a callback and return the first value found in the array that matches the condition.
*/
function find(arr, fn) {
    for (let i=0; i<arr.length; i++){
        if (fn(arr[i])){
            return arr[i]
        }
    }
}
//test
find([8,11,4,27], function(val){return val >= 10});

/*Ex. 9
Write a function called findIndex. It should take in an array and a callback and
 return the index of first value found in the array that matches the condition.
*/

function findIndex(arr, fn){
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i]) === true){
            return i;
        }
    }
}
