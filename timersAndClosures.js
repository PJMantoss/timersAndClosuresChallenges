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
