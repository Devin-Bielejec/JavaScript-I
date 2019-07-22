// // Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = () => console.log("Function was invoked!");

// myFunction();

// let anotherFunction = (param) => param;

// anotherFunction("Example");

// let add = (param1, param2) => param1 + param2;

// add(1,2);

// let subtract = (param1, param2) => param1 - param2;

// subtract(1,2);


// //Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(num => num * 3);
// console.log(triple);


//call backs

function addNumbers(num1, num2) {
    console.log(num1 + num2);
};

function getSomeCoolNumbersAddThem(callback){
    const blah1 = Math.random();
    const blah2 = Math.random();
    callback(blah1, blah2);
};

getSomeCoolNumbersAddThem(addNumbers);

function mean(array){
    return array.reduce( (a,b) => a + b, 0)/array.length;
}


function one(cb1, cb2) {
    const testArray = [1,2,3,4,5,6,7,8,9,10];
    return cb1(testArray)/cb1(testArray);
}

console.log(one(mean, mean));

//cool beans