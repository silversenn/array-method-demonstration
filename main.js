//ForEach-----------------------------------

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("ForEach:")
printNumber(number);


console.log("ForEach result:")
number.forEach(function(n){
    if( n % 2 === 0){
        console.log(`${n} - genap`)
    }else
        console.log(`${n} - ganjil`)
});

//Map-----------------------------------
console.log("MAP:")
printNumber(number);

const Negnum = number.map(function(n){
    return n - (n * 2)

})

console.log("Map result:", Negnum)


//Arrow Function--------------------------

//instead of doing this
const perpangkatan = function(x){
    return x * x;

}

//do this
const Square = (x) => {
    return x * x;
}


//filter-------------------------------

console.log("FILTER:")
printNumber(number);

const numFilter = number.filter((n) => {
    return n < 5;

})

console.log("Filter result:", numFilter)


//every and some-----------------------
//

console.log("EVERY:")
printNumber(number);

const fcEvery = number.every((n) => {
    return n > 5;

}) //false

console.log("every result:", fcEvery)

console.log("SOME:")
printNumber(number);

const fcSome = number.some((n) =>{
    return n > 5;
}) //true

console.log("some result:", fcEvery)


//reduce-----------------------

console.log("REDUCE:")
printNumber(number);

const numTotal = number.reduce(function(number, currentNumber) {
    return number + currentNumber;

})

console.log("Reduce result:", numTotal)


//settimeout and setinterval

const second = [1, 2, 3, 4, 5];

console.log("SETTIMEOUT:")
printNumber(second);

for(let i = 0; i < second.length; i++){
    
    setTimeout((x) => {
        console.log(second[x]);
    }, i * 500, i);

}



function printNumber(val){
    console.log("Array:", val)
}