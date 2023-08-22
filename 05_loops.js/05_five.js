// for each 

const coding = [ "js" , "ruby" , "java" , "python" , "cppp" ] ;

coding.forEach(function(item){
    // console.log(item) ;
});

coding.forEach((element) => {
    // console.log(element) ;
}) ;

//another way
function printMe(item){
    console.log(item) ;
}
// coding.forEach(printMe) ;

//forEach have other parameters also
coding.forEach((element,index,arr) => {
    // console.log(element,index,arr) ;
}) ;


// aray of object 
const myLang = [
    {
        name : "chinmay" ,
        roll : 1
    },
    {
        name : "rahull" ,
        roll : 2
    },
    {
        name : "hemant" ,
        roll : 3
    }
] ; 

myLang.forEach((item)=>{
    console.log(item) ;
})

myLang.forEach((item)=>{
    console.log(item.name) ;
})