// 내풀이
function solution(arr, divisor) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      stack.push(arr[i]);
    }
  }
  if (stack.length === 0) {
    stack.push(-1);
  }
  return stack.sort((a, b) => a - b);
}

// 다른사람풀이
function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
