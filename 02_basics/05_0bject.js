const student = {
    full_name : "chinmay" ,
    roll : 51 ,
    branch : "EXTC" ,
    year : "fourth"
};


// we can acces the element in object with both method mentioned below
//console.log(student.full_name) 
//console.log(student["full_name"]) ;

// but to have clean and professional code syntax we use object destructuring

//destructure
const {full_name: nam} = student ;
console.log(nam) ;


//JSON talk