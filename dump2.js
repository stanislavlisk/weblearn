//



/////////////////
//ARRAY METHODS

var Myarray = ['appleti', 'tree', 'berry', 'bighouse', 'ape', 'ale', 'tree'];
var Newarray = [];
var Myobjarr = [
  {size: 12, price: 210},
  {size: 20, price: 180}
];
var Mystr = 'sometext'
console.log(Myarray[0]);
//returns last index of array by search
let arrLast = Myarray.lastIndexOf('berry');
//console.log(arrLast);

//returns first index of aarray?
let arrOf = Myarray.indexOf('tree');
//console.log(arrOf);

//pop last array item out
let arrPop = Myarray.pop();
//console.log(arrPop);
//console.log(Myarray);

//shift first item out, also assigning variable like this
//changes original array.arrays data is referenced,
//but numbers and strings not
let arrShiftsl = Myarray.slice();
let arrShift = arrShiftsl.shift();
//console.log(arrShift);

//push adds to end, unshift adds to start
//Newarray.push(Mystr);
Newarray.push(Myarray[0])
console.log(Newarray);

Newarray.unshift(Myarray[1]);
//Newarray.push(Myarray[4]);
console.log(Newarray);

//for each element of array do some
//  Myarray.forEach(element => console.log(element));
//  Myarray.forEach(element => console.log('aha'));
//string must be converted??
//Mystr.forEach(element => console.log('oho'));













/////END///////
