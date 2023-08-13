// date  (it is object)

let myDate = new Date()
// console.log(typeof(myDate));

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString);
// console.log(myDate.toLocaleDateString());


let myCreatedDate = new Date(2001,7,18) ;//(year,month,day)
// let myCreatedDate = new Date(2001,7,18,5,3) ;(year,month,day,hour,min,sec)
// console.log(myCreatedDate.toLocaleString()) ;

// another syntax 
let myD = new Date("01-18-2001") ;
// console.log(myD.toLocaleString());


// TIME STAMP

// mow()
let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// gettime()
// console.log(myD.getTime())

//mili sec to second
// console.log(Math.floor(myTimeStamp/1000));


let newDate = new Date() ;
// console.log(newDate.toLocaleDateString())
// console.log(newDate.getDate()) ;
// console.log(newDate.getDay()) ;
// console.log(newDate.getMonth()) ;
// console.log(newDate.getFullYear()) ;
// console.log(newDate.getHours()) ;
// console.log(newDate.getMinutes()) ;
// console.log(newDate.getSeconds()) ;
// console.log(newDate.getMilliseconds()) ;


//---------------------------------------------------------
newDate.toLocaleString('default',{
    weekday : "long"
})