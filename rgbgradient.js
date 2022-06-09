///
var mydata = JSON.parse(data);
function  printdata() {
  let dat = mydata[1];
  let datString = String(dat);
  let datJas = JSON.stringify(dat);
  console.log('dat....' + dat);
  console.log('datString....' + datString);
  console.log('datJas....' + datJas);
  console.log('goes....');
  document.getElementById("jsontest").innerHTML = datJas;
}



function  myfunc() {
  document.getElementById("jsontest").innerHTML = 'mydata';
}
