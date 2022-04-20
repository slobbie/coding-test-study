// parseInt 란?
// 자바스크립트에 내장되어 있는 함수로, 말 그대로 문자열을 파싱하여 문자열에 포함된 숫자를 찾아서 number로 형변환을 시켜준다.
function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}
