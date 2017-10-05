/* 20171005 DM - w1d4 Callbacks - Map exercise.

  This function takes in two arguments.
  The first will be an array to map and
  the second will be a callback function.
  The function will return a new array based on
  the results of the callback function.
*/
var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func) {
  var arrNew = [];
  // This code below uses a for loop.
  // var cnt = arr.length;
  // var arrLen = arr.length;
  // for (; cnt; cnt--) {
  //    arrNew.push(func(arr[arrLen - cnt]));
  // }

  // This code is the same as above except with forEach.
  arr.forEach(function(item){
    arrNew.push(func(item));
  })

  console.log (arrNew);
}

//Testers (from exercise)
map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

