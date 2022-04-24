function solution(arr) {
  let result = arr.reduce((acc, cur, idx) => acc + cur, 0);
  return result / arr.length;
}

// //reduce
// arr.reduce((acc, cur, idx) => acc + cur, 0);

// acc => 초기값
// cur => 현재값
// 0 => 초기설정값

// 다른사람 풀이
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// for 문을 이용한 풀이
function average(array) {
  //함수를 완성하세요
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  //console.log(sum);
  var avg = sum / i;
  return avg;
}
