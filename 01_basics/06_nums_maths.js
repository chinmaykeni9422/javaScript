const score = 400 ;
// console.log(score);

const balance = new Number(100) ;
// console.log(balance);

// console.log(balance.toString()) ;

// console.log(balance.toFixed(2));
// console.log(balance.toFixed(3));


const num = 23.8966 ; // o/p => 23.9
// const num = 123.8966 ; // o/p => 124
// const num = 1123.8966 ; // o/p => 1.12e+3
// console.log(num.toPrecision(3));


const numb = 1000000 ;
// console.log(numb.toLocaleString()); // by default american standard
// console.log(numb.toLocaleString('en-IN')); // indian standard


//+++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// abs()
// console.log(Math.abs(-8)) ; // convert -Ve value into +ve value but does not convert +ve value into -ve value

// round()
// console.log(Math.round(4.3));
// console.log(Math.round(4.5));
// console.log(Math.round(4.6));

// to control the rounding off 
// ceil()
// console.log(Math.ceil(4.3));
// floor()
// console.log(Math.floor(4.9));


// min() and max() 
// console.log(Math.min(6,5,4,7,8));
// console.log(Math.max(6,5,4,7,8));


// random() ==> gives any random value between 0 to 1 , also it can give you 0 and 1 .
// console.log(Math.random());

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10 ;
// const max = 20 ;

// console.log(Math.floor(Math.random()*(max-min+1))+min);