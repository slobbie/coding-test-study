// i 가 n 의 제곱근과 같다면 true  아니라면 fals 를 반한하는 함수
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(n) {
  let value = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      value++;
    }
  }
  return value;
}
