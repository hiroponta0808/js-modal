// function sample1() {
//   var count = 1;
//   console.log(count);
// }
//
// sample1();
//
// function samle2() {
//   var count = 1;
//   return count;
// }
//
// sample2();
//
// function sample3() {
//   var count = 1;
//   return count;
// }
//
// var func = sample3();
// console.log(func);

function sample4() {
  var count = 1;
  return function() {
    alert(count);
    count++;
  }
}
var func1 = sample4();
var btn03 = document.getElementById('btn03');
btn03.addEventListener('click', func1)

//
// var btn01 = document.getElementById('btn01');
// var btn02 = document.getElementById('btn02');
//
// btn01.addEventListener('click', click2);
// btn02.addEventListener('click', click3);

// var amount = 0;
// function click() {
//   console.log(amount);
//   amount++;
// }
//
// var amount1 = 0;
// function click2() {
//   console.log(amount1);
//   amount1++;
// }
//
// var amount2 = 0;
// function click3() {
//   console.log(amount2);
//   amount2++;
// }

// (function(a) {
//   var num = 1 + a;
//     console.log(num);
// })(10);
