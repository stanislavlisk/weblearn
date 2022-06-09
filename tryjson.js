///
var mydata = JSON.parse(data);
var mydata2 = JSON.parse(data2);


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

function printEachName() {
  let dat = mydata;
  let list = [];
  for (let i of dat) {
    list.push(i['name']);
    console.log(list);
    document.getElementById("jsontest").innerHTML = list;
  }
}


function  myfunc() {
  document.getElementById("jsontest").innerHTML = 'mydata';
}
