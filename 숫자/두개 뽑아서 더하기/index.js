function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 두수를 더하는 모든 경우의 수를 배열에 담아준다.
      arr.push(numbers[i] + numbers[j]);
    }
  }
  // new Set 을 할시에 중복된 배열의 값을 가질수 없는것을 이용하였다.
  const answer = [...new Set(arr)];
  return answer.sort((a, b) => a - b);
}
