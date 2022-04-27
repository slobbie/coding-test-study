function solution(phone_number) {
  let v = phone_number.length - 4;
  return '*'.repeat(v) + phone_number.substring(v);
}
