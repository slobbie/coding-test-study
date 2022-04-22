function solution(arr) {
  let min = Math.min(...arr);
  let idx = arr.indexOf(min);
  if (arr.length > 1) {
    arr.splice(idx, 1);
  } else {
    arr = [-1];
  }
  return arr;
}
// indexOf 현재 인덱스를 알게 해주는 메소드
// Math.min 배열안에  최소값을 가진 요소를 알려줌
// Math.max 배열안에  최소값을 가진 요소를 알려줌
