function solution(n) {
  let value = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      value += i;
    }
  }
  return value;
}
