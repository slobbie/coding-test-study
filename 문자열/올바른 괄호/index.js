let s = ')';

// 스택 을 사용한 방법
function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// 스택의 개념을 빌려와서 사용한 경우
function solution(s) {
  let count = 0;

  for (const c of s) {
    if (c === '(') {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}
