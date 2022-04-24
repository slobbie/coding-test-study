// 홀수 짝수 경우의수 계산

// % 나머지 정리 기호  ex) 7 / 2 일때 몫은 3 나머지값은 1  => 1의 값이 출력
function solution(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += '박';
    } else {
      result += '수';
    }
  }
  return result;
}

// js 메서드 를 이용한 풀이
//.repeat() 문자열을 반복한 값을 반환하는 메서드

// String.substring(start) //문자열  start위치부터 끝까지 문자열 자르기 => 시작위치 미포함
// String.substring(start,end) //문자열  start위치 부터 end전까지 문자열 발췌 => 시작위치, 끝위치 미포함
function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}
