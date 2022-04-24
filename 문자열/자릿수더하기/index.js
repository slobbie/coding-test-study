function solution(n) {
  let value = n
    .toString()
    .split('')
    .map((n) => Number(n));
  return value.reduce((acc, cur, idx) => acc + cur, 0);
}
