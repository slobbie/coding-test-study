function solution(a, b) {
  let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(`2016-${a}-${b}`);
  let Day = date.getDay();
  return arr[Day];
}
