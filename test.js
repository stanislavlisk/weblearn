
var MyRGB = {
  red: 120,
  green: 100,
  blue: 200
};


//////////////////////

function myObjtoRGB(myObj) {
  let myObjvalues = Object.values(myObj);
  let newRGB = myObjvalues.join();
  console.log(newRGB);
  return newRGB;
}
console.log(myObjtoRGB(MyRGB));
//////////////////
