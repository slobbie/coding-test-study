function solution(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      result = 'Even';
    } else {
      result = 'Odd';
    }
  }
  return result;
}
