// 2! = 1*2*3*4*5;
// 3! = 1*2*3*4*5*6;
// 4! = 1*2*3*4*5;
// 10! = 1*2*3*4*5*6*7*8*9*10;
// how does factorial works;
// you have to keep multiply the answer
//like 4! = 1*2*3*4*5 = 1*2 = 2*3=6*4=24*5=120
// var factorial = 1; //jog korle prathomil value 0 
// gun korle prathomik value 1 diye korte hobe

//this is using for loop
// for (var i = 1; i <=5; i++) {
//    factorial =  factorial*i
//     console.log(i, factorial);
// }

//this is using while loop
var i = 1;
var factorial = 1;
while (i <= 5) {
    factorial = factorial * i;
    //console.log(i, factorial);
    i++;
}
console.log(factorial);


//this is using function
function factorial(n){
    var fact = 1;
    for (var i = 1; i <=n; i++) {
        fact =  fact*i
     }  
     return fact;
}

// var result = factorial(10);
// console.log(result);