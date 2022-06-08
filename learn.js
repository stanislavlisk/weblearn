function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}




var MyRGB = {
  red: 120,
  green: 100,
  blue: 200
};

///////////////////////

function changeMyRgb(color, incr) {
  let colorRate = 10;
  if (incr === 'add') {
    MyRGB[color] += colorRate;
    console.log('add');
  } else if (incr ==='sub') {
    MyRGB[color] -= colorRate;
    console.log('sub');
  } else {
    console.log('some error');
  }
}
console.log(changeMyRgb('blue', 'add'));
console.log(MyRGB);
//////////////////////

function myObjtoRGB(myObj) {
  let myObjvalues = Object.values(myObj);
  let newRGB = myObjvalues.join();
  console.log(newRGB);
  return newRGB;
}
console.log(myObjtoRGB(MyRGB));
//////////////////

function changeDomRGB(color, incr) {
  changeMyRgb(color, incr);
  let domRgb = myObjtoRGB(MyRGB);
  document.getElementById("colchange").style.backgroundColor = 'rgb(' + domRgb + ')';
  document.getElementById("demo").innerHTML = domRgb;


}


//console.log('rgb(' + merged + ')');




//document.getElementById("demo").innerHTML = "Paragraph changed.";
//document.getElementById("colchange").style.backgroundColor = 'rgb(10, 200, 71)';
