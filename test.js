
var MyRGB = {
  red: 120,
  green: 100,
  blue: 200
};



var MyRGB = {
  red: 120,
  green: 100,
  blue: 230
};

///////////////////////

function changeMyRgb(color, incr) {
  let colorRate = 10;
  let newcopy = {};
  Object.assign(newcopy, MyRGB);
  console.log(newcopy);
  newcopy[color] += colorRate;
  console.log(newcopy);
  console.log(MyRGB);



};
console.log(changeMyRgb('blue', 'add'));

//////////////////////
