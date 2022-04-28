function solution(x) {
  let answer = true;
  let arr = String(x).split('');
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += Number(arr[i]);
  }

  if (!(x % num === 0)) {
    answer = false;
  }
  return answers;
}
