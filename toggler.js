// function toggler(a,b,c) {
//     return function () {
//         return a
//       }
     
    
// }

// const toggle = toggler(1,2,3)
// console.log(toggle())
// console.log(toggle())
// toggle()


// function iter_from(from) { 
//     var counter = from; 
//     return function() { return counter++; }; 
// } 
 
// var iter10 = iter_from(10); 
// console.log(iter10()); // -> 10 
// console.log(iter10()); // -> 11 

function toggle(m,n,o){
    return function z(){
        console.log (z(m))
      return function y(){
        console.log (y(n))
        return function x(){
           console.log(x(o))
        }
    }
}
}
var toggler = toggle(1,2,3)
console.log(toggler())
// // toggler = toggler()
//  console.log(toggler)
// // toggler = toggler()
 