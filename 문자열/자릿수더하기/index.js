function solution(n) {
  let value = n
    .toString()
    .split('')
    .map((n) => Number(n));
  return value.reduce((acc, cur, idx) => acc + cur, 0);
}

// 다른사람 풀이

function solution(n) {
  // 쉬운방법
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}
