

var MyRGB = {
  red: 120,
  green: 100,
  blue: 200
};

///////////////////////

function changeMyRgb(color, incr) {
  let colorRate = 10;
  let tmpobj = {};
  Object.assign(tmpobj,MyRGB);

  if (incr === 'add') {
    tmpobj[color] += colorRate;
    if (tmpobj[color] > 255) {
      tmpobj[color] = 255;
      return tmpobj;
    }
    return tmpobj;

  } else if (incr ==='sub') {
    tmpobj[color] -= colorRate;
    if (tmpobj[color] < 0) {
      tmpobj[color] = 0;
      return tmpobj;
    }
    return tmpobj;

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
//////////////////

function changeDomRGB(color, incr) {
  let tmpobj = changeMyRgb(color, incr);
  let domRgb = myObjtoRGB(tmpobj);
  document.getElementById("colchange").style.backgroundColor = 'rgb(' + domRgb + ')';
  document.getElementById("demo").innerHTML = domRgb;
  MyRGB = tmpobj;


}
