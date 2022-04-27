function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// .sort() 배열의 요소를 적절한 위치에 정렬한후 그배열을 반환한다.
// 오름차순
function compareNumbers(a, b) {
  return a - b;
}

// 내림차순
function compareNumbers(a, b) {
  return b - a;
}

//.localeCompare() 메서드는 참조 문자열이 정렬 순서에서 앞 또는 뒤에 오는지 또는 주어진 문자열과 같은지를 숫자로 반환

// referenceStr이 compareString보다 앞에 있으면 -1, 뒤에 있으면 1, 같으면 0 반환

// 'a'.localeCompare('b') // -1 ,
// 'b'.localeCompare('a') // 1
// 'c'.localeCompare('c') // 0
