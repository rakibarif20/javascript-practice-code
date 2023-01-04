// Array iteration for forEach();



//The forEach() method calls a function (a callback function) once for each array element

//simple example from w3schools

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>";
}


// push array into array using forEach function ;

const item1 = ['Rakib', 'siam', 'Bangladesh'];
const item2 = [];

// for(let i=0; i < item1.length; i++){
//     item2.push(item1[i]);
//     // console.log(item1[i]);
// }

const demo2Print = item1.forEach((item, index, array)=>{
    // item2.push(item + index)
    console.log(index);
    console.log(array);

});
// document.getElementById('demo2').innerHTML = item2;
// console.dir(forEach());

// console.log(item2);